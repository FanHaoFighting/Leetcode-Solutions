/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false
  }
  var map = {}
  for (var i = 0; i < s.length; i++) {
    var c = s[i]
    if (map[c]) {
      map[c]++
    } else {
      map[c] = 1
    }
  }
  for (var i = 0; i < t.length; i++) {
    var c = t[i]
    if (map[c]) {
      if (map[c] == 0) {
        return false
      } else {
        map[c]--
      }
    } else {
      return false
    }
  }
  return true
};

