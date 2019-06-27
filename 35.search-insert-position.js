/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    mid = Math.floor((high + low) / 2)
    if (nums[mid] >= target) {
      high = mid
    } else {
      // 加一放在low上, 防止low和mid相差一位时陷入死循环
      low = mid + 1
    }
  }
  return low
};

