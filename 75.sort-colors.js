/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  var index = 0;
  while (index <= right) {
    if (nums[index] == 0) {
      let temp = nums[left]
      nums[left] = nums[index]
      nums[index] = temp
      left++
      index++
    } else if (nums[index] == 1) {
      index++
    } else if (nums[index] == 2) {
      let temp = nums[right]
      nums[right] = nums[index]
      nums[index] = temp
      right--
    }
  }
};

