/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1.length < num2.length) {
    return multiply(num2, num1)
  }
  let map = []
  let mapResult = "0"
  for (var i = 0; i <= 9; i++) {
    map.push(mapResult)
    mapResult = addStrings(mapResult, num1)
  }
  let res = ""
  for (var i = 0; i < num2.length; i++) {
    res = addStrings(res + "0", map[num2[i]])
  }
  return res
};

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
}

