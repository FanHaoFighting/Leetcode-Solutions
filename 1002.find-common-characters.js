/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (strs) {
  var map = {}
  for (var i = 0; i < strs[0].length; i++) {
    var c = strs[0][i]
    if (c in map) {
      map[c]++
    } else {
      map[c] = 1
    }
  }
  for (var i = 1; i < strs.length; i++) {
    var str = strs[i]
    var mapRepalce = {}
    for (let j = 0; j < str.length; j++) {
      var c = str[j]
      if (map[c] > 0) {
        if (c in mapRepalce) {
          mapRepalce[c]++
        } else {
          mapRepalce[c] = 1
        }
        map[c]--
      }
    }
    map = mapRepalce
  }
  let res = []
  for (let key in map) {
    for (var i = 0; i < map[key]; i++) {
      res.push(key)
    }
  }
  return res
};



