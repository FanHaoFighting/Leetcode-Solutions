/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = ""
  let max = 0
  for (let i = 0; i <= 2 * (s.length - 1); i ++) {
    let str = extendToLeftAndRigght(s, i)
    res = max > str.length ? res : str
    max = max > str.length ? max : str.length
  }
  return res
};

var extendToLeftAndRigght = function(s, index) {
  let res
  let left
  let right
  if (index % 2 == 0) {
    res = s.charAt(index / 2)
    left = index/2 - 1
    right = index/2 + 1
  } else {
    res = ""
    left = (index - 1) / 2
    right = (index + 1) / 2
  }
  while (left >= 0 && right <= s.length -1  && s.charAt(left) === s.charAt(right)) {
    res = s.charAt(left) + res + s.charAt(right)
    left--
    right++
  }
  return res
}

