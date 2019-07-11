/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length == 0) {
    return 0
  }
  for (var i = 0; i < haystack.length; i++) {
    for (var j = 0; j < haystack.length && haystack[i + j] == needle[j]; j++) {
      if (j == needle.length - 1) {
        return i
      }
    }
  }
  return -1
};

