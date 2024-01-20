### Step-1: Instal package
Go to the root directory of the React-Native project and run below commnad to install the package.
```
npm i @satheeshpolu/utils-package
   or
npm install @satheeshpolu/utils-package
```

### Step-2: Setup i18n support
Go to the below path of the project and run following commands
```
<YOUR-PROJECT-ROOT-DIRECTORY>/node_modules/@satheeshpolu/utils-package

bash setup.sh <YOUR-PROJECT-ROOT-DIRECTORY>
```
Note: You need to provide your `PROJECT-ROOT-DIRECTORY` path as a paramerter to the setup.sh bash command so, it will install the dependencies in that project

### Import the dependencies in your home screen of the application
```
1. import i18n from '../../utilities/translations i18n';

2. const { t } = useTranslation();


3. <I18nextProvider i18n={i18n}>
      ...
      ...
      ...
   </I18nextProvider>

```
TBU...!