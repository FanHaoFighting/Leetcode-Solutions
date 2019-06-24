/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num == 0) {
    return true
  }
  let res = num
  // 循环计算到sqrt(num)的整数部分出现
  while (res * res - num >= 1) {
    res = res - (res * res - num) / (2 * res)
  }
  res = Math.floor(res)
  if (res * res == num) {
    return true
  } else {
    return false
  }
};

