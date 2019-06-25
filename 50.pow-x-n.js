/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) {
    return 1
  }
  if (n == -1) {
    return 1 / x
  }
  if (n % 2 == 0) {
    var t = myPow(x, n / 2)
    return t * t
  } else {
    var t = myPow(x, (n - 1)/ 2)
    return t * t * x
  }
};

