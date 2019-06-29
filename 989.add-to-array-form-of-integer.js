/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let i = A.length - 1
  let carry = 0
  while (i >= 0 || K != 0 || carry > 0) {
    let digit1 = i >= 0 ? A[i] : 0
    let digit2 = K % 10
    // 如果i < 0, 则在数组A的首位增加一个值
    if (i >= 0) {
      A[i] = ((digit1 + digit2 + carry) % 10)
    } else {
      A.unshift((digit1 + digit2 + carry) % 10)
    }
    carry = digit1 + digit2 + carry >= 10 ? 1 : 0
    i--
    K = (K - digit2) / 10
  }
  return A
};

