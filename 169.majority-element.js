/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length == 1) {
    return nums[0]
  }
  var map = {}
  var mid = Math.floor(nums.length / 2)
  for (var i = 0; i < nums.length; i++) {
    var c = nums[i]
    if (map[c]) {
      map[c]++
      if (map[c] > mid) {
        return c
      }
    } else {
      map[c] = 1
    }
  }
};

