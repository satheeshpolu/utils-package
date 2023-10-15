const formaters = require("./src/formaters.js");
const sortOperations = require("./src/sort-operations.js");

module.exports = {
  formatNumber: formaters.formatNumber,
  formatDate: formaters.formatDate,
  sortArray: sortOperations.sortData,
  sortArrayOfObjectsByKey: sortOperations.sortArrayObjectData,
};
