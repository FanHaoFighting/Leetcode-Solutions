/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var countMap = {}
  for (var i = 0; i < s.length; i++) {
    var char = s[i]
    if (char in countMap) {
      countMap[char]++
    } else {
      countMap[char] = 1
    }
  }
  for (var i = 0; i < s.length; i++) {
    var char = s[i]
    if (countMap[char] == 1) {
      return i
    }
  }
  return -1
};

