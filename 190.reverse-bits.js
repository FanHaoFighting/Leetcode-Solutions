/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let sum  = 0
    for (let i = 0; i < 32; i++) {
      var digit = n % 2
      sum = sum * 2 + digit
      n = (n -digit) / 2
    }
    return sum
};

