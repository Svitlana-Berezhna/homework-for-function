function isBigger(a, b) {
  return a > b;
}

function isSmaller(a, b) {
  return a === b ? false : !isBigger(a, b);
}

function getMin(...numbers) {
  let min = arguments.length > 0 ? arguments[0] : undefined;
  for (let i = 0; i < arguments.length; i++) {
    if (min > arguments[i])
      min = arguments[i];
  }
  return min;
}

function makeNumber(string) {
  return string.replace(/[^0-9]/g, "");
}

function countNumbers(string) {
  string = makeNumber(string);
  let result = {};
  while (string.length > 0) {
    let firstChar = string[0];
    let oldLength = string.length;
    string = string.replace(new RegExp(`${firstChar}`, "g"), "");
    result[firstChar] = oldLength - string.length;
  }
  return result;
}

function pipe(number, ...functions) {
  functions.forEach(func => number = func(number));
  return number;
}

function isLeapYear(date) {
  let dateLeapYear = new Date(date);
  if (isNaN(dateLeapYear.valueOf())) { return "Invalid Date"; }
  let year = dateLeapYear.getFullYear();
  return (((year % 4 === 0) && !(year % 100 === 0 && year % 400 !== 0))) ? `${year} is a leap year` : `${year} is not a leap year`;
}


module.exports = {
  isBigger,
  isSmaller,
  makeNumber,
  countNumbers,
  getMin,
  pipe,
  isLeapYear,
};
