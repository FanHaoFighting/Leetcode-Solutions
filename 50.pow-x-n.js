/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) {
    return 1
  }
  if (n == 1) {
    return x
  }
  if (n == -1) {
    return 1 / x
  }
  let temp
  if (n > 0) {
    temp = myPow(x, Math.floor(n / 2))
  } else  {
    temp = myPow(x, Math.ceil(n / 2))
  }
  if (n % 2 == 0) {
    return temp * temp;
  } else {
    if (n > 0) {
      return x * temp * temp
    } else {
      return (temp * temp) / x
    }
  }
};

