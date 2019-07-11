/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var thisMaxSum = 0
  var maxSum = 0
  for (var i = 0; i < nums.length; i++) {
    thisMaxSum += nums[i]
    maxSum = Math.max(thisMaxSum, maxSum)
    if (thisMaxSum < 0) {
      thisMaxSum = 0
    }
  }
  return maxSum
};

