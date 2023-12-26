const fs = require('fs').promises; // Use fs.promises for asynchronous file operations
const { execSync } = require('child_process');

// Step-1: Check if the project root directory is provided
const projectDirectoryPath = process.argv[2];

if (!projectDirectoryPath) {
  console.log('Please provide the project root directory');
  console.log('Usage: npm run add-i18n <project-root-directory>');
  process.exit(1);
}

console.log('Error in Project Directory => ', projectDirectoryPath);

// Step-2: Install i18next dependencies
try {
  execSync(`cd ${projectDirectoryPath} && npm install i18next react-i18next`);
  console.log('i18next dependencies installed successfully.');
} catch (error) {
  console.error('Error installing dependencies:', error.stdout.toString());
  process.exit(1);
}

// File content for i18n.ts
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

// Directory for translation files
const translationsDirectory = `${projectDirectoryPath}/src/utilities/translations`;

// Function to create directories for supported countries
const createDirForSupportedCountries = async () => {
  const i18nSupportedCountries = ['de', 'fr', 'en'];

  for (const countryCode of i18nSupportedCountries) {
    const path = `${translationsDirectory}/${countryCode}`;

    try {
      await fs.mkdir(path, { recursive: true });
      await fs.writeFile(`${path}/index.ts`, '"Please import translation files here...!"');
      console.log(`A new ${path}/index.ts file is created.`);
    } catch (err) {
      console.error(`Error creating directory or file for ${countryCode}:`, err);
    }
  }
};

// Step-3: Check if the project root directory has src/utilities
(async () => {
  try {
    await createDirForSupportedCountries();

    // Check if utilities directory exists
    const utilitiesExist = await fs.access(translationsDirectory).then(() => true).catch(() => false);

    if (!utilitiesExist) {
      await fs.mkdir(translationsDirectory, { recursive: true });
    }

    // Write i18n.ts file
    await fs.writeFile(`${translationsDirectory}/i18n.ts`, fileContent);
    console.log('i18n script added into i18n.ts file.');
    console.log('File(i18n.ts) written successfully.');
  } catch (error) {
    console.error('Error while writing into File(i18n.ts)', error);
  }
})();
