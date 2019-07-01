/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length == 1) {
    return (nums[0] === target ? 0 : -1)
  }
  let minIndex = findMin(nums);
  let left = 0
  let len = nums.length
  let right = len - 1

  while (left < right) {
    let mid = Math.floor((right + left) / 2)
    // 这一步是核心思想!!
    let realMid = (mid + minIndex) % len
    if (nums[realMid] == target) {
      return realMid
    } else if (nums[realMid] < target) {
      left = mid + 1
      if (nums[realMid + 1] == target) {
        return realMid + 1
      }
    } else {
      right = mid - 1
    }
  }
  return -1
};

var findMin = function(nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((right + left) / 2)
    if(nums[mid] > nums[right]) {
      left = mid + 1
    } else if (nums[mid] < nums[right]){
      right = mid
    } else {
      break
    }
  }
  return left
};

