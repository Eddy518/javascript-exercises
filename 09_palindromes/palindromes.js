const palindromes = function (str) {
  let withoutPunctuation = str.replace(/[\W_]/g, "");

  withoutPunctuation = withoutPunctuation.toLowerCase();

  let reverseString = withoutPunctuation.split("").reverse().join("");

  reverseString = reverseString.toLowerCase();

  if (withoutPunctuation === reverseString) {
    return true;
  } else {
    return false;
  }
};
// Do not edit below this line
module.exports = palindromes;
