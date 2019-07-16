/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length == 1) {
    return nums[0]
  }
  var index = nums[0]
  var count = 1
  for (var i = 1; i < nums.length; i++) {
    if (count == 0) {
      index = nums[i]
    }
    if (index == nums[i]) {
      count++
    } else {
      count--
    }
  }
  return index
};

