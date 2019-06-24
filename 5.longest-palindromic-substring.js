/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = ""
  if (s.length == 1) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    let s1 = extendPalindrome(s, i, i)
    let s2 = extendPalindrome(s, i, i + 1)
    if (s1.length > res.length) {
      res = s1;
    }
    if (s2.length > res.length) {
      res = s2;
    }
  }
  return res
};

var extendPalindrome = function (s, left, right) {
  if (s.charAt(left) != s.charAt(right)) {
    return ""
  }
  for (left, right; 0 <= left && right < s.length; left-- , right++) {
    if (s.charAt(left) != s.charAt(right)) {
      break;
    }
  }
  // 左边索引和右边索引的位置分别往反方向移动1
  return s.substring(left + 1, right);
}

