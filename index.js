// Format only +ve numbers
const formatNumber = (_number) => {
  if (!_number) throw new Error("Please provide the valid number");
  if (_number && isNaN(_number))
    throw new Error(`Please provide the valid number instead of ${_number}`);

  return _number >= 0 && _number < 10 ? "0" + _number : _number;
};

// Format Date
const formatDate = (_date = new Date(), _delimiter = ".") => {
  if (!(_date instanceof Date))
    throw new Error(`Please provide the Date instead of ${_date}`);

  const _newDate = new Date(_date);
  const _min = formatNumber(_newDate.getMinutes());
  const _hour = formatNumber(_newDate.getHours());
  const _day = formatNumber(_newDate.getDay() + 1);
  const _month = formatNumber(_newDate.getMonth() + 1);
  const _year = _newDate.getFullYear();
  const _dateFormat = `${_day}${_delimiter}${_month}${_delimiter}${_year}`;
  const _timeFormat = `${_hour}:${_min}`;
  return _dateFormat + " " + _timeFormat;
};

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
  formatNumber: formatNumber,
  formatDate: formatDate,
  sortArray: sortData,
  sortArrayOfObjectsByKey: sortArrayObjectData,
};
