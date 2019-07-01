/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n == 1) {
    return 1
  }
  let preTwo = 1
  let preOne = 1
  let res
  for (let i = 1; i < n; i++) {
    res = preTwo + preOne
    preTwo = preOne
    preOne = res
  }
  return res
};

