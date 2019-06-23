/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  // 不直接操作x, 不然x变换无法记录初始值
  var num = x
  var numReverse = 0
  var digit
  while (x > 0) {
    digit = x % 10
    x = (x - digit) / 10
    numReverse = digit + numReverse * 10
  }
  if (numReverse == num) {
    return true
  } else {
    return false
  }
};

