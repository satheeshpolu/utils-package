const fileContent = `
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import de from './de';
import en from './en';
import fr from './fr';

const supportedLngs = ['de', 'en', 'fr'];
const resources = {
  de: de,
  en: en,
  fr: fr,
};

const getLanguage = () => {
  const locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;
  return locale.substring(0, 2);
};

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'de',
  lng: getLanguage(),
  interpolation: {
    escapeValue: false,
  },
  supportedLngs: supportedLngs,
  compatibilityJSON: 'v3',
  resources: resources,
});

export default i18n;
`;

const i18nSupportedCountries = ["de", "fr", "en"];

module.exports = {
   fileContent,
   i18nSupportedCountries
};