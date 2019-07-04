/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return ""
  }
  let prefix = strs[0]
  for (let i = 0; i < strs.length; i++) {
    let j = 0
    while (j < strs[i].length && j < prefix.length && prefix[j] == strs[i][j]) {
      j++
    }
    prefix = prefix.substring(0, j)
    if (prefix.length == 0) {
      return ""
    }
  }
  return prefix
};

