/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let res = ""
    while (n != 0) {
      let digit = (n - 1) % 26
      res = String.fromCharCode(digit + 65) + res
      n = (n - digit - 1) / 26
    }
    return res
};

