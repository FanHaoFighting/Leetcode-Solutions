/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  // 按照数字大小从小到大排列排列
  nums.sort(function(a, b) {
    return a - b;
  })
  let i = 0
  let j = nums.length - 1
  let res = 0
  // 不需要找到中位数, 高点与对应低点的差值之和即为结果, i++ j--最后逼近的也是中位数
  while(i < j) {
    res += nums[j] - nums[i]
    i++
    j--
  }
  return res
};
