/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var map = {}

  for (var i = 0; i < strs.length; i++) {
    var str = strs[i]
    var key = str.split("").sort().join("")
    if (key in map) {
      map[key].push(str)
    } else {
      map[key] = [str]
    }
  }
  return Object.values(map)
};

