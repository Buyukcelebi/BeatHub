import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { createContext, useContext, useEffect, useState } from 'react';

import i18n from '@/lang';

const DEFAULT_LOCALE = 'en';
type SupportedLocales = 'en' | 'tr';

interface LanguageContextType {
  locale: string;
  isLoading: boolean;
  setLocale: (locale: SupportedLocales) => Promise<void>;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: DEFAULT_LOCALE,
  isLoading: true,
  setLocale: async () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<string>(Localization.locale.split('-')[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSavedLanguage();
  }, []);

  const loadSavedLanguage = async () => {
    try {
      setIsLoading(true);
      const savedLocale = await AsyncStorage.getItem('@app_locale');
      if (savedLocale) {
        setLocaleState(savedLocale);
        await i18n.changeLanguage(savedLocale);
      } else {
        // Set device locale or fallback to default
        const deviceLocale = Localization.locale.split('-')[0];
        const initialLocale = ['en', 'tr'].includes(deviceLocale) ? deviceLocale : DEFAULT_LOCALE;
        await setLocale(initialLocale as SupportedLocales);
      }
    } catch (error) {
      console.error('Error loading language:', error);
      setLocaleState(DEFAULT_LOCALE);
    } finally {
      setIsLoading(false);
    }
  };

  const setLocale = async (newLocale: SupportedLocales) => {
    try {
      await AsyncStorage.setItem('@app_locale', newLocale);
      setLocaleState(newLocale);
      await i18n.changeLanguage(newLocale);
    } catch (error) {
      console.error('Error saving language:', error);
      throw new Error('Failed to set language');
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, isLoading, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
