/// <reference types="vite/client" />

declare namespace ImportMetaEnv {
  readonly VITE_AWS_REGION: string;
  readonly VITE_COGNITO_USER_POOL_ID: string;
  readonly VITE_COGNITO_USER_POOL_CLIENT_ID: string;
  readonly VITE_COGNITO_OAUTH_DOMAIN: string;
  readonly VITE_COGNITO_OAUTH_REDIRECT_SIGN_IN: string;
  readonly VITE_COGNITO_OAUTH_REDIRECT_SIGN_OUT: string;
  readonly VITE_COGNITO_OAUTH_RESPONSE_TYPE: string;
  readonly VITE_COGNITO_OAUTH_SCOPES: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
