/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

};

// 牛顿迭代法
var newTon = function (x) {
  if (x == 0) {
    return x
  }
  let res = x
  // 循环计算到出现小数位置, while内用>=是因为3这个特殊情况
  while (res * res - x >= 1) {
    res = res - (res * res - x) / (2 * res)
  }
  return Math.floor(res)
}

