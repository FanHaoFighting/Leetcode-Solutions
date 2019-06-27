/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[index] != nums[i]) {
      index++
      nums[index] = nums[i]
    }
  }
  // 返回数组长度
  return ++index
};

