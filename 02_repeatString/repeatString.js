const repeatString = function (str, num) {
  let result = "";
  if (num < 0) return "ERROR";
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  return result;
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
