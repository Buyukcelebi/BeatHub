import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('./en.json'),
  },
  // tr: {
  //   translation: require('./tr.json'),
  // },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Localization.locale.split('-')[0],
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
