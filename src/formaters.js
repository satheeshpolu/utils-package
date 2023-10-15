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

 module.exports = {
   formatNumber: formatNumber,
   formatDate: formatDate,
 };