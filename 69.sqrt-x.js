/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (n) {
  if (n == 0) {
    return 0
  }
  // 二分法
  var low = 1
  var high = n

  while (high - low > 1) {
    var mid = Math.floor((low + high) / 2)
    var t = mid * mid
    if (t > n) {
      high = mid
    } else if (t < n) {
      low = mid
    } else {
      return mid
    }
  }
  return low
};

// 牛顿迭代法
var newton = function (x) {
  if (x == 0) {
    return x
  }
  let res = x
  // 循环计算到整数位精确的时候为止, while内用>=是因为3这个特殊情况
  while (res * res - x >= 1) {
    res = res - (res * res - x) / (2 * res)
  }
  return Math.floor(res)
}

