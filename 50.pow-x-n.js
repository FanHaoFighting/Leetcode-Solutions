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

  var digitWidth = Math.floor(Math.log2(n))
  var t = 1
  
  // 将n转换为2进制表示, 位数为1的
  while (digitWidth >= 0) {
      var d = (n >> digitWidth) % 2
      if (d == 1) {
          t = t * t * x
      } else {
          t = t * t
      }
      digitWidth--
  }
  if (positive) {
    return t
  } else {
    return 1 / t / x
  }
};


