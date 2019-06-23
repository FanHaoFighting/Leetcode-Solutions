
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0
  while (x != 0) {
    let digit = x % 10
    x = (x - digit) / 10
    res = 10 * res + digit
  }
  if (res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) {
    return 0
  }
  return res
};

