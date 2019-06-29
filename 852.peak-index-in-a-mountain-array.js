/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let temp
    for (let i = 1; i < A.length; i++) {
      if (A[i] < temp) {
        return i - 1
      }
      temp = A[i]
    }
    return 0
};

