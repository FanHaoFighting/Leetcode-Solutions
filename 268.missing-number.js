/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // for循环中的运算无法达到最后一个值
  let res = nums.length
  for (let i = 0; i < nums.length; i++) {
    res = res ^ i ^ nums[i]
  }
  return res
};

