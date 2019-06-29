/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N == 0) {
    return 0
  }
  if (N == 1 || N == 2) {
    return 1
  }
  let fibMinusOne = 1
  let fibMinusTwo = 0
  let fib
  for (let i = 2; i <= N; i++) {
    fib = fibMinusOne + fibMinusTwo
    fibMinusTwo =fibMinusOne
    fibMinusOne = fib
  }
  return fib
};

