import {
  confirmResetPassword,
  confirmSignUp,
  fetchAuthSession,
  getCurrentUser,
  resetPassword,
  signIn,
  signUp,
} from "aws-amplify/auth";

import { configureAmplify } from "../../../config/amplify";
import type { User } from "../types/user";

interface RegisterPayload {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export const authService = {
  async login(
    email: string,
    password: string
  ): Promise<User> {
    const isConfigured = configureAmplify();

    if (!isConfigured) {
      throw new Error(
        "Cognito is not configured. Set VITE_AWS_REGION, VITE_COGNITO_USER_POOL_ID, and VITE_COGNITO_USER_POOL_CLIENT_ID."
      );
    }

    const result = await signIn({
      username: email,
      password,
    });

    if (result.isSignedIn) {
      const [currentUser, session] = await Promise.all([
        getCurrentUser(),
        fetchAuthSession(),
      ]);

      return {
        id: currentUser.userId,
        fullName: email,
        email,
        phone: "",
        token:
          session.tokens?.idToken?.toString() ??
          session.tokens?.accessToken?.toString() ??
          "",
      };
    }

    throw new Error("Unable to sign in");
  },

  async register(payload: RegisterPayload) {
    const isConfigured = configureAmplify();

    if (!isConfigured) {
      throw new Error(
        "Cognito is not configured. Set VITE_AWS_REGION, VITE_COGNITO_USER_POOL_ID, and VITE_COGNITO_USER_POOL_CLIENT_ID."
      );
    }

    const result = await signUp({
      username: payload.email,
      password: payload.password,
      options: {
        userAttributes: {
          email: payload.email,
          name: payload.fullName,
          phone_number: payload.phone,
        },
      },
    });

    if (result.isSignUpComplete) {
      return { needsConfirmation: false };
    }

    return {
      needsConfirmation:
        result.nextStep.signUpStep === "CONFIRM_SIGN_UP",
    };
  },

  async confirmRegister(email: string, code: string) {
    await confirmSignUp({
      username: email,
      confirmationCode: code,
    });
  },

  async forgotPassword(email: string) {
    await resetPassword({ username: email });
  },

  async confirmForgotPassword(
    email: string,
    code: string,
    newPassword: string
  ) {
    await confirmResetPassword({
      username: email,
      confirmationCode: code,
      newPassword,
    });
  },

  async restoreSession(): Promise<User | null> {
    const isConfigured = configureAmplify();

    if (!isConfigured) {
      return null;
    }

    try {
      // First check if there's a valid session
      const session = await fetchAuthSession();
      
      const hasActiveSession = Boolean(
        session.tokens?.idToken || session.tokens?.accessToken
      );

      if (!hasActiveSession) {
        return null;
      }

      // Only try to get current user if we have an active session
      const currentUser = await getCurrentUser();

      const resolvedEmail =
        typeof currentUser.username === "string" && currentUser.username.includes("@")
          ? currentUser.username
          : "";

      return {
        id: currentUser.userId,
        fullName: currentUser.signInDetails?.loginIds?.[0] || resolvedEmail || currentUser.username,
        email: resolvedEmail || currentUser.username,
        phone: "",
        token:
          session.tokens?.idToken?.toString() ||
          session.tokens?.accessToken?.toString() ||
          "",
      };
    } catch (error) {
      console.error("Session restoration error:", error);
      return null;
    }
  },
};