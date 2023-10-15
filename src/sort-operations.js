// Simple array sort
const sortData = (_data = [], _orderType) => {
  _data.sort((a, b) => (_orderType === "des" ? b - a : a - b));
  return _data;
};

// Sort array of object(s) by key
const sortArrayObjectData = (_data, _field, _orderType) => {
  _data.sort((a, b) => {
    if (typeof a[_field] === "string" && typeof b[_field] === "string") {
      return _orderType === "des"
        ? b[_field].localeCompare(a[_field])
        : a[_field].localeCompare(b[_field]);
    } else {
      return _orderType === "des"
        ? b[_field] - a[_field]
        : a[_field] - b[_field];
    }
  });
  return _data;
};

module.exports = {
  sortData: sortData,
  sortArrayObjectData: sortArrayObjectData,
};
