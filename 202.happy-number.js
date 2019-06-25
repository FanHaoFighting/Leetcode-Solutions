
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var sum = 0
  while (n > 0) {
    var d = n % 10
    sum += d * d
    n = (n - d) / 10
  }
  if (sum == 1) {
    return true
    // 数学上陷入4的循环就不是快乐数
  } else if (sum == 4) {
    return false
  } else {
    return isHappy(sum)
  }
};


