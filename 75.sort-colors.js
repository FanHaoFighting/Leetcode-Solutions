/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeroIndex = 0
    let twoIndex = nums.length - 1
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0 && i > zeroIndex) {
        nums[i] = nums[zeroIndex]
        nums[zeroIndex] = 0
        zeroIndex++
      }
      if (nums[i] === 2 && i < twoIndex) {
        nums[i] = nums[twoIndex]
        nums[twoIndex] = 2
        twoIndex--
      }

    }
    while (zeroIndex < twoIndex) {
      if ()
    }
};

