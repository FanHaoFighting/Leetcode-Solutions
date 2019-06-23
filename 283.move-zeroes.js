/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastNotZeroAt = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        nums[lastNotZeroAt] = nums[i]
        lastNotZeroAt++
      }
    }
    for (let i = lastNotZeroAt; i < nums.length; i++) {
      nums[i] = 0
    }
};

