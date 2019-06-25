/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let positive
  if (n >= 0) {
    positive = true
  } else {
    positive = false
  }
  // 纯粹为了处理testcase: '2.00000\n-2147483648', 防止overflow
  if (n < 0) {
    n = -(n + 1)
  }

  var res = 1
  var temp = x

  while (n > 0) {
      // 当该位为1的时候, temp的值要乘上
      if (n % 2 == 1) {
        res *= temp
      }
      // temp依次为x^1 x^2 x^4 x^16 x^32....
      temp = temp * temp
      n = n >> 1
  }
  if (positive) {
    return res
  } else {
    return 1 / res / x
  }
};


