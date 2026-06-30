import { Amplify } from "aws-amplify";

let isConfigured = false;

export function configureAmplify() {
  if (isConfigured) {
    return true;
  }

  const region = import.meta.env.VITE_AWS_REGION;
  const userPoolId = import.meta.env.VITE_COGNITO_USER_POOL_ID;
  const userPoolClientId =
    import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_ID ||
    import.meta.env.VITE_COGNITO_USER_POOL_WEB_CLIENT_ID;
  const oauthDomain = import.meta.env.VITE_COGNITO_OAUTH_DOMAIN?.replace(/^https?:\/\//, "");
  const redirectSignIn = import.meta.env.VITE_COGNITO_OAUTH_REDIRECT_SIGN_IN?.split(",").map((url) => url.trim());
  const redirectSignOut = import.meta.env.VITE_COGNITO_OAUTH_REDIRECT_SIGN_OUT?.split(",").map((url) => url.trim());
  const responseType =
    import.meta.env.VITE_COGNITO_OAUTH_RESPONSE_TYPE || "code";
  const scopes = import.meta.env.VITE_COGNITO_OAUTH_SCOPES?.split(",").map(
    (scope) => scope.trim()
  );

  if (
    !region ||
    !userPoolId ||
    !userPoolClientId ||
    !oauthDomain ||
    !redirectSignIn?.length ||
    !redirectSignOut?.length ||
    !scopes?.length
  ) {
    return false;
  }

  Amplify.configure({
    Auth: {
      Cognito: {
        region,
        userPoolId,
        userPoolClientId,
        loginWith: {
          email: true,
          username: false,
          oauth: {
            domain: oauthDomain,
            redirectSignIn,
            redirectSignOut,
            responseType,
            scopes,
          },
        },
      },
    },
  });

  isConfigured = true;
  return true;
}
