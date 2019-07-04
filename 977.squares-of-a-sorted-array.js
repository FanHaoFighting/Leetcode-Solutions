var sortedSquares = function (A) {
  let index = findFirstNonnegative(A)
  let left = index - 1
  let right = index
  let res = []
  while (left >= 0 || right < A.length) {
    if (left < 0) {
      res.push(A[right] * A[right])
      right++
      continue
    }
    if (right >= A.length) {
      res.push(A[left] * A[left])
      left--
      continue
    }
    if (A[left] * A[left] < A[right] * A[right]) {
      res.push(A[left] * A[left])
      left--
    } else {
      res.push(A[right] * A[right])
      right++
    }
  }
  return res
};

/**
 * 找出数组中第一个非负数的索引, 全为负数则找到最大负数, 全为正数则找到最小正数
 * @param {} nums 
 */
var findFirstNonnegative = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] < 0) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

