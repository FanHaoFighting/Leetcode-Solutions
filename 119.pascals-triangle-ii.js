/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1]
  } 
  let arr = [1]
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = 0; j < i - 1; j++) {
      arr[j] = arr[j] + arr[j + 1]
    }
    arr.unshift(1)
  }
  return arr
};

