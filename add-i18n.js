const fs = require("fs").promises; // Use fs.promises for asynchronous file operations
const { execSync } = require("child_process");

// Step-1: Get the project root directory
const projectDirectoryPath = process.cwd();

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

// Directory for translation files
const translationsDirectory = `${projectDirectoryPath}/src/utilities/translations`;

// Step-2: Install i18next dependencies
const preInstallDependencies = async () => {
  try {
    execSync(`cd ${projectDirectoryPath} && npm install i18next react-i18next`);
  } catch (error) {
    console.error("\n❌ Error installing dependencies:", error.stdout.toString());
    process.exit(1);
  }
};

const addImportScriptsByCountry = (countryCode) => {
  const script = `import homeScreen from "../${countryCode}/screens/home";
  
  export default {homeScreen, };`;
  return script;
};

const addDefaultTranslationsByCountry = (countryCode) => {
  const script = `export default { title: "${countryCode} Home Title", };`;
  return script;
};

// Function to create directories for supported countries
const createDirForSupportedCountries = async () => {

  for (const countryCode of i18nSupportedCountries) {
    const path = `${translationsDirectory}/${countryCode}`;
    //console.log(`⏳ A new ${path}/index.ts file is created.`);
    try {
      await fs.mkdir(path, { recursive: true });
      await fs.writeFile(
        `${path}/index.ts`,
        addImportScriptsByCountry(countryCode)
      );
      await fs.mkdir(path + "/screens", { recursive: true });
      await fs.writeFile(
        `${path}/screens/home.ts`,
        addDefaultTranslationsByCountry(countryCode)
      );
    } catch (err) {
      console.error(
        `❌ Error creating directory or file for ${countryCode}:`,
        err
      );
    }
  }
};

// Step-3: Check if the project root directory has src/utilities
(async () => {
  try {
    await preInstallDependencies();
    console.log(
      "✅ i18next and react-i18next dependencies installed successfully.\n"
    );
    await createDirForSupportedCountries();
    console.log(`⏳ Files are currently being generated.`);

    // Check if utilities directory exists
    const utilitiesExist = await fs
      .access(translationsDirectory)
      .then(() => true)
      .catch(() => false);

    if (!utilitiesExist) {
      await fs.mkdir(translationsDirectory, { recursive: true });
    }

    // Write i18n.ts file
    await fs.writeFile(`${translationsDirectory}/i18n.ts`, fileContent);
    // console.log('i18n script added into i18n.ts file.');
    console.log("\n✅ i18n setup is done and i18n.ts file created successfully. 🚀");
  } catch (error) {
    console.error("❌ Error while writing into File(i18n.ts)", error);
  }
})();
