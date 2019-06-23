/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num == 0) {
    return true
  }
  let res = num
  // 循环计算到出现小数位置, while内用>=是因为3这个特殊情况
  while (res * res - x >= 1) {
    res = res - (res * res - x) / (2 * res)
  }
  return Math.floor(res)
};

