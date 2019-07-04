/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var map = {};
  var currStart = 0;
  var max = 0;

  for (var i = 0; i < s.length; i++) {
    currStart = map[s[i]] >= currStart ? map[s[i]] + 1 : currStart;
    map[s[i]] = i;
    max = i - currStart + 1 > max ? i - currStart + 1 : max;
  }
};

