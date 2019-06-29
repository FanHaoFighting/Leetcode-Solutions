/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return []
  }
  let arr = new Array([1])
  for (let i = 1; i < numRows; i++) {
    let subArr = new Array
    subArr.push(1)
    for (let j = 1; j < i; j++) {
      subArr[j] = arr[i -1][j - 1] + arr[i - 1][j]
    }
    subArr.push(1)
    arr.push(subArr)
  }
  return arr
};

