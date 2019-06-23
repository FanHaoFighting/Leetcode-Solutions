/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    if (digits[i] <= 9) {
      return digits
    }
    digits[i] = 0
  }
  digits.unshift(1);
  return digits;
};

