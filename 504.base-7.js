/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let res = ""
    let sign
    if (num == 0) {
      return "0"
    }
    if (num < 0) {
      sign = "-"
    } else {
      sign = ""
    }
    num = Math.abs(num)
    while(num != 0) {
      let digit = num % 7
      num = (num - digit) / 7
      res = digit + res
    }
    return sign + res
};

