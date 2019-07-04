/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  var count = 0
  for (var i = 1; i < n; i++) {
    if (isPrime(i)) {
      count++
    }
  }
  return count
};

var primeList = [2]

function isPrime(n) {
  if (n < 2) {
    return false
  }

  var sqrt_n = Math.floor(Math.sqrt(n))

  for (var i = 0; primeList[i] <= sqrt_n; i++) {
    if (n % primeList[i] == 0) {
      return false
    }
  }
  if (n > primeList[primeList.length - 1]) {
    primeList.push(n)
  }
  return true
}

