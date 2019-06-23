/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let res = new Array
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      res.push("FizzBuzz")
      continue
    } else if (i % 3 == 0) {
      res.push("Fizz")
    } else if (i % 5 == 0) {
      res.push("Buzz")
    } else {
      res.push("" + i)
    }
  }
  return res
};

