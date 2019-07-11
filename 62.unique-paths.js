/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var cache = {}
var uniquePaths = function(m, n) {
  if (m === 1 || n === 1) {
    return 1
  }
  if (cache[m] && cache[m][n]) {
    return cache[m][n]
  } 
  if (cache[n] && cache[n][m]) {
      return cache[n][m]
  }
  var res = uniquePaths(m -1, n) + uniquePaths(m, n -1)
  if (cache[m] === undefined) {
    cache[m] = {}
  }
  cache[m][n] = res
  return res
};

