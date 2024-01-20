const fs = require("fs").promises; // Use fs.promises for asynchronous file operations
const { execSync } = require("child_process");

// Step-1: Get the project root directory
const projectDirectoryPath = process.cwd();
const i18nSupportedCountries = ["de", "fr", "en"];

const fileContent = `
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform, NativeModules } from 'react-native';

const resources = {
  de: { translation: require('./de/screens/home.json') },
  en: { translation: require('./en/screens/home.json') },
  fr: { translation: require('./fr/screens/home.json') },
};
const getDdeviceLanguage = () => {
  const deviceLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;
  return deviceLanguage.split(0, 2);
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: getDdeviceLanguage(),
  fallbackLng: 'de',
  debug: true,
  supportedLngs: ["de", "fr", "en"],
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

`;

// const i18nSupportedCountries = ["de", "fr", "en"];

// Directory for translation files
const translationsDirectory = `${projectDirectoryPath}/src/utilities/translations`;

// Step-2: Install i18next dependencies
const preInstallDependencies = async () => {
  try {
    execSync(`cd ${projectDirectoryPath} && npm install i18next react-i18next`);
  } catch (error) {
    console.error(
      "\n❌ Error installing dependencies:",
      error.stdout.toString()
    );
    process.exit(1);
  }
};

const addImportScriptsByCountry = (countryCode) => {
  //old
  //const script = `import homeScreen from "../${countryCode}/screens/home";

  //New
  const script = `import homeScreen from "../../screens/home";
  // Please modify the above import path correctly
  export default {homeScreen, };`;
  return script;
};

const addDefaultTranslationsByCountry = (countryCode) => {
  // old
  // const script = `export default { title: "${countryCode} Home Title", };`;

  //New
  const script = `{ "login-app": "Connexion" }`;
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

      //Old
      // await fs.writeFile(
      //   `${path}/screens/home.ts`,
      //   addDefaultTranslationsByCountry(countryCode)
      // );

      // New
      await fs.writeFile(
        `${path}/screens/home.json`,
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
    // Old
    //await fs.writeFile(`${translationsDirectory}/i18n.ts`, fileContent);

    //New
    await fs.writeFile(`${translationsDirectory}/i18n.js`, fileContent);

    // console.log('i18n script added into i18n.ts file.');
    console.log(
      "\n✅ i18n setup is done and i18n.ts file created successfully. 🚀"
    );
  } catch (error) {
    console.error("❌ Error while writing into File(i18n.ts)", error);
  }
})();
