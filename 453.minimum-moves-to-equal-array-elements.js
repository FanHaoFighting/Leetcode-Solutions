/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  // 每次n - 1个数相加, 本质上就是有一个数的相对长度减小
  // 最后的结果就是数组的所有值减去最小值
  let min = findMin(nums)
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res += nums[i] - min 
  }
  return res
};

var findMin = function(nums) {
  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i])
  }
  return min
}

