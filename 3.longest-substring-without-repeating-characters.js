/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) {
    return 0
  }
  var map = {}
  // 给i和j一个初始化的值
  var i = 0
  var j = 0
  var maxLen = 1
  for (j; j < s.length; j++) {
    var c = s[j]
    if (c in map) {
      map[c]++
      while (map[c] == 2) {
        var ic = s[i]
        i++
        map[ic]--
      }
    } else {
      map[c] = 1
    }
    maxLen = Math.max(maxLen , j - i + 1 )
  }
  return maxLen
};

