/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let count = 0
    let max = 0
    // 找到右边第一个1
    while (N % 2 === 0) {
      N = N >> 1
    } 
    // 根据规则, 找到最大距离
    while (N !== 0) {
      N = N >> 1
      count++
      if (N % 2 == 1) {
        max = max > count ? max : count 
        count = 0
      }
    }
    return max
};

