const formaters = require("./src/formaters.js");
const sortOperations = require("./src/sort-operations.js");
const timeDifference = require("./src/time-difference.js");

module.exports = {
  formatNumber: formaters.formatNumber,
  formatDate: formaters.formatDate,
  sortArray: sortOperations.sortData,
  sortArrayOfObjectsByKey: sortOperations.sortArrayObjectData,
  calculateTimeDifference: timeDifference.calculateTimeDifference,
};
