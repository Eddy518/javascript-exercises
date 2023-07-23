const removeFromArray = function (arr, par) {
  for (let i = 0; i < arguments.length; i++) {
    for (const iterator of arr) {
      if (iterator === arguments[i]) {
        let index = arr.indexOf(iterator);
        arr.splice(index, 1);
      }
    }
  }
  return arr;
};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
