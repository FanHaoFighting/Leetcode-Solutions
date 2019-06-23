/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num == 1) {
    return false
  }
  var sum = 1
  var sqrt_num = Math.floor(Math.sqrt(num))

  for (var i = 2; i <= sqrt_num; i++) {
    if (num % i == 0) {
      // 平方根
      if (i == num / i) {
        sum += i
      } else {
        sum += i + (num / i)
      }
    }
  }
  return sum == num
};

