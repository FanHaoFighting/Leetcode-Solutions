/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let positive = n >= 0
 
  var res = 1
  var temp = x

  n = Math.abs(n)
  while (n > 0) {
      // 当该位为1的时候, temp的值要乘上
      if (n % 2 == 1) {
        res *= temp
      }
      // temp依次为x^1 x^2 x^4 x^16 x^32....
      temp = temp * temp
      n = n >>> 1
  }
  if (positive) {
    return res
  } else {
    return 1 / res
  }
};


