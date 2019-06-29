/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let sum = ""
  while (i >= 0 || j >= 0 || carry > 0) {
    let digit1 = i < 0 ? 0 : num1.charAt(i) - '0'
    let digit2 = j < 0 ? 0 : num2.charAt(j) - '0'
    sum = ((digit1 + digit2 + carry) % 2) + sum
    carry = digit1 + digit2 + carry >= 2 ? 1 : 0
    i--
    j--
  }
  return sum
};

