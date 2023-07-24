const add = function (num1, num2) {
  const result = num1 + num2;
  return result;
};

const subtract = function (num1, num2) {
  const result = num1 - num2;
  return result;
};

const sum = function (sumArray) {
  let result = 0;
  sumArray.forEach((num) => {
    result += num;
  });
  return result;
};

const multiply = function (...nums) {
  let result = 1;
  for (const num of nums) {
    result *= num;
  }
  return result;
};

const power = function (num1, num2) {
  const result = Math.pow(num1, num2);
  return result;
};

const factorial = function (num) {
  let result = 0;
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
