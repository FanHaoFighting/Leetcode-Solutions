/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var mapS = {}
  for (var i = 0; i < s.length; i++) {
    var sChar = s[i]
    var tChar = t[i]
    if (!mapS[sChar]) {
      if (Object.values(mapS).includes(tChar)) {
        return false
      }
      mapS[sChar] = tChar
    } else {
      if (mapS[sChar] != tChar) {
        return false
      }
    }

  }
  return true
};


