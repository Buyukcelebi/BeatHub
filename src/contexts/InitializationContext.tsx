import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState, useEffect, ReactNode } from 'react';

import STORAGE_KEYS from '@/constants/StorageKeys';
import { View } from 'react-native';
import { Theme } from '@/theme/types';
import useThemedStyles from '@/theme/useThemedStyles';

type InitializationContextType = {
  isInitialized: boolean;
  setIsInitialized: (value: boolean) => Promise<void>;
};

export const InitializationContext = createContext<InitializationContextType | undefined>(
  undefined
);

export function InitializationProvider({ children }: { children: ReactNode }) {
  const [isInitialized, _setIsInitialized] = useState<null | boolean>(null);

  useEffect(() => {
    checkOnboarding();
  }, []);

  const checkOnboarding = async () => {
    try {
      const initKey = await AsyncStorage.getItem(STORAGE_KEYS.ONBOARDING);
      const _initKey = initKey ? JSON.parse(initKey) : false;
      _setIsInitialized(_initKey);
    } catch (error) {
      console.log(error);
    }
  };

  const setIsInitialized = async (value: boolean) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.ONBOARDING, JSON.stringify(value));
      _setIsInitialized(value);
    } catch (error) {
      console.log(error);
    }
  };

  if (isInitialized === null) {
    return <View style={{ flex: 1, backgroundColor: '#000' }} />;
  }

  return (
    <InitializationContext.Provider value={{ isInitialized, setIsInitialized }}>
      {children}
    </InitializationContext.Provider>
  );
}
