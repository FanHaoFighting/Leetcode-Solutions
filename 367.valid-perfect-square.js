/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num == 0) {
    return true
  }
  let res = mySqrt(num)
  if (res * res == num) {
    return true
  } else {
    return false
  }
};

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

