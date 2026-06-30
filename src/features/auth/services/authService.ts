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
        fullName: currentUser.username,
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
      const [currentUser, session] = await Promise.all([
        getCurrentUser(),
        fetchAuthSession(),
      ]);

      if (!session?.isSignedIn) {
        return null;
      }

      return {
        id: currentUser.userId,
        fullName: currentUser.username,
        email:
          (currentUser.attributes?.email as string) ||
          currentUser.username,
        phone:
          (currentUser.attributes?.phone_number as string) ||
          "",
        token:
          session.tokens?.idToken?.toString() ||
          session.tokens?.accessToken?.toString() ||
          "",
      };
    } catch {
      return null;
    }
  },
};