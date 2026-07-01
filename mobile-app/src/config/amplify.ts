import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Amplify } from 'aws-amplify';
import Constants from 'expo-constants';

let isConfigured = false;

export function configureAmplify() {
  if (isConfigured) {
    return true;
  }

  const extra = Constants.expoConfig?.extra ?? {};
  const region = String(extra.awsRegion ?? '');
  const userPoolId = String(extra.cognitoUserPoolId ?? '');
  const userPoolClientId = String(extra.cognitoUserPoolClientId ?? '');

  console.log('configureAmplify: region=', region);
  console.log('configureAmplify: userPoolId=', userPoolId);
  console.log('configureAmplify: userPoolClientId=', userPoolClientId);

  if (!region || !userPoolId || !userPoolClientId) {
    console.error('configureAmplify: Missing required Cognito config');
    return false;
  }

  try {
    Amplify.configure({
      Auth: {
        Cognito: {
          userPoolId,
          userPoolClientId,
          loginWith: {
            email: true,
            username: false,
          },
        },
      },
    });

    console.log('configureAmplify: Amplify configured successfully');
    isConfigured = true;
    return true;
  } catch (err) {
    console.error('configureAmplify: Failed to configure Amplify:', err);
    return false;
  }
}
