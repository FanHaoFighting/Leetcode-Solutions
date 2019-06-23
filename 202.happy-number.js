
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while (n % (10 * (getDigitWidth(n) -1)) != 0) {
      n = digitsSquareSum(n)
      if (n % (10 * (getDigitWidth(n) -1)) != 0) {
        return true
      }
    }
};

var digitsSquareSum  = function(n) {
  let digitWidth = getDigitWidth(n)
  var sum = 0
  let digit
  for (let i = 0; i < digitWidth; i++) {
    digit = n % 10
    n = Math.floor(n / 10)
    sum += digit * digit
  }
}

//获取位数
var getDigitWidth = function(n){
  var width=0;
  while(n>=1){
      width = width + 1;
      n = n / 10;
  }
  return width;
}


