/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr = new Array
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.indexOf(nums1[i]) >= 0 && arr.indexOf(nums1[i]) < 0) {
        arr.push(nums1[i])
      }
    }
    return arr
};

