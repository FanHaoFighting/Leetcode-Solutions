/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows == 1) {
    return s
  }
  let arr = new Array(numRows).fill("")
  let clearZero = 2 * numRows - 2
  let index = 0
  for (let i = 0; i < s.length; i++) {
    if (index == clearZero) {
      index = 0
    }
    if (index < numRows) {
      arr[index] += s[i]
    } else {
      arr[clearZero - index] += s[i]
    }
    index++
  }
  let res = ""
  for (let i = 0; i < arr.length; i++) {
    res += arr[i]
  }
  return res
};

