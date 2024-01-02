#!\bin\bash

#Please provide the installation path
project_dir=$1

# Validate if the entered path exists
if [ -d "${project_dir}" ]; then
  echo "Installation path is valid. Proceeding...⏳"
else
  echo "❌ The project path you provided is invalid. Exiting script."
  exit 1
fi

cp "add-i18n.js" "${project_dir}"

cd "${project_dir}" || exit

# execute
# node add-i18n.js && echo "Done!" && rm "add-i18n.js"
node add-i18n.js && echo "Almost there, just a few more moments ⏳" && rm "add-i18n.js"

echo "✅ Congratulations, the setup has been successfully completed! 🚀"