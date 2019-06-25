/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n < 1) {
      return false
    }
    // 2的n次方首位为1, 其余位数为0, 故用此做法
    return (n & (n - 1)) == 0
};

