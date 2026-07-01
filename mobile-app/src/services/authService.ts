import {
  confirmResetPassword,
  confirmSignUp,
  fetchAuthSession,
  getCurrentUser,
  resetPassword,
  signIn,
  signOut,
  signUp,
} from 'aws-amplify/auth';
import { configureAmplify } from '../config/amplify';
import type { RegisterPayload, User } from '../types/auth';

export const authService = {
  async login(email: string, password: string): Promise<User> {
    const isConfigured = configureAmplify();

    if (!isConfigured) {
      throw new Error('Cognito is not configured. Check your Expo app config values.');
    }

    const result = await signIn({ username: email, password });

    if (!result.isSignedIn) {
      throw new Error('Unable to sign in');
    }

    // Get session first to ensure valid auth
    const session = await fetchAuthSession();
    const hasActiveSession = Boolean(session.tokens?.idToken || session.tokens?.accessToken);

    if (!hasActiveSession) {
      throw new Error('No active session after sign in');
    }

    // Then get user info
    const currentUser = await getCurrentUser();

    return {
      id: currentUser.userId,
      fullName: email,
      email,
      phone: '',
      token: session.tokens?.idToken?.toString() ?? session.tokens?.accessToken?.toString() ?? '',
    };
  },

  async register(payload: RegisterPayload) {
    const isConfigured = configureAmplify();

    if (!isConfigured) {
      throw new Error('Cognito is not configured. Check your Expo app config values.');
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
      needsConfirmation: result.nextStep.signUpStep === 'CONFIRM_SIGN_UP',
    };
  },

  async confirmRegister(email: string, code: string) {
    await confirmSignUp({ username: email, confirmationCode: code });
  },

  async forgotPassword(email: string) {
    await resetPassword({ username: email });
  },

  async confirmForgotPassword(email: string, code: string, newPassword: string) {
    await confirmResetPassword({ username: email, confirmationCode: code, newPassword });
  },

  async restoreSession(): Promise<User | null> {
    const isConfigured = configureAmplify();
    console.log('authService.restoreSession: isConfigured =', isConfigured);

    if (!isConfigured) {
      console.warn('authService.restoreSession: Amplify not configured');
      return null;
    }

    try {
      console.log('authService.restoreSession: Fetching session...');
      const session = await fetchAuthSession();
      console.log('authService.restoreSession: Session fetched, has tokens:', !!session.tokens);
      
      const hasActiveSession = Boolean(session.tokens?.idToken || session.tokens?.accessToken);

      if (!hasActiveSession) {
        console.log('authService.restoreSession: No active session');
        return null;
      }

      try {
        console.log('authService.restoreSession: Getting current user...');
        const currentUser = await getCurrentUser();
        const resolvedEmail = typeof currentUser.username === 'string' && currentUser.username.includes('@') ? currentUser.username : '';

        console.log('authService.restoreSession: User restored:', currentUser.userId);
        return {
          id: currentUser.userId,
          fullName: resolvedEmail || currentUser.username,
          email: resolvedEmail || currentUser.username,
          phone: '',
          token: session.tokens?.idToken?.toString() ?? session.tokens?.accessToken?.toString() ?? '',
        };
      } catch (err) {
        console.error('authService.restoreSession: getCurrentUser failed:', err);
        return null;
      }
    } catch (err) {
      console.error('authService.restoreSession: fetchAuthSession failed:', err);
      return null;
    }
  },

  async logout() {
    await signOut();
  },
};
