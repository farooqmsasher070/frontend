import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ConfirmScreen from '../screens/Auth/ConfirmScreen';
import AppTabs from './AppTabs';
import { authService } from '../services/authService';
import { useAuthStore } from '../store/authStore';
import type { User } from '../types/auth';

export type AuthStackParamList = {
  Login: { email?: string } | undefined;
  Register: undefined;
  Confirm: { email: string };
  AppTabs: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export default function AppNavigator() {
  const [initialRoute, setInitialRoute] = useState<'Login' | 'AppTabs'>('Login');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        console.log('AppNavigator: Starting bootstrap...');
        const sessionUser = await authService.restoreSession();
        console.log('AppNavigator: Session restored:', !!sessionUser);
        if (sessionUser) {
          setUser(sessionUser);
          setInitialRoute('AppTabs');
        } else {
          setInitialRoute('Login');
        }
      } catch (err) {
        console.error('AppNavigator: Bootstrap error:', err);
        const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
        setError(`Bootstrap failed: ${errorMsg}`);
      } finally {
        setLoading(false);
      }
    };

    bootstrap();
  }, []);

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 16, color: '#dc2626', marginBottom: 10 }}>Bootstrap Error</Text>
        <Text style={{ fontSize: 14, color: '#666', textAlign: 'center' }}>{error}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Confirm" component={ConfirmScreen} />
        <Stack.Screen name="AppTabs" component={AppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
