const fs = require("fs");

const path = "package.json";

// Read the package.json file
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading  file:${path}`, err);
  } else {
    const packageData = JSON.parse(data);
    console.log("🔴 Old version: ", packageData.version);
    const newVersion = "1.1.8"; //Update the version and run 'npm run update-version'
    packageData.version = newVersion;
    // Convert the modified object back to a JSON string
    const updatedData = JSON.stringify(packageData, null, 2);
    fs.writeFile(path, updatedData, (err) => {
      if (err) {
        console.error("❌ Update encountered an error.", err);
      } else {
        console.log("✅ Version updated successfully.");
      }
    });
    console.log("🟢 Latest version: ", packageData.version);
  }
});
