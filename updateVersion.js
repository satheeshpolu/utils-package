const fs = require("fs");

const path = "package.json";

// Read the package.json file
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading  file:${path}`, err);
  } else {
    const packageData = JSON.parse(data);
    console.log("Current version: ", packageData.version);
    const newVersion = "1.1.6"; //Update the version here
    packageData.version = newVersion;
    // Convert the modified object back to a JSON string
    const updatedData = JSON.stringify(packageData, null, 2);
    fs.writeFile(path, updatedData, (err) => {
      if (err) {
        console.error("Error writing the JSON file: 2", err);
      } else {
        console.log("Version updated successfully.");
      }
    });
    console.log("Updated version: ", packageData.version);
  }
});
