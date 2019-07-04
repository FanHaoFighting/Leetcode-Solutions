/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let sum = ""
  while (i >= 0 || j >= 0 || carry > 0) {
    let digit1 = ~~num1[i--]
    let digit2 = ~~num2[j--]
    sum = ((digit1 + digit2 + carry) % 10) + sum
    carry = digit1 + digit2 + carry >= 10 ? 1 : 0
  }
  return sum
};

