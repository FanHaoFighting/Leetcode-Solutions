/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  var isIncrase = false
  var count = 0
  for (var i = 0; i < A.length - 1; i++) {
    if (A[i] == A[i+1]) {
      continue
    }
    if (count >= 1 && isIncrase != (A[i] < A[i+1])) {
      return false
    } 
    isIncrase = (A[i] < A[i+1])
    count++
  }
  return true
};

