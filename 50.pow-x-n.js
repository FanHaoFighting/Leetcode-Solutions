/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  var digitWidth = Math.floor(Math.log2(n))
  var t = 1
  
  while (digitWidth >= 0) {
      var d = (n >> digitWidth) % 2
      if (d == 1) {
          t = t * t * x
      } else {
          t = t * t
      }
      digitWidth--
  }
  
  return t
};


