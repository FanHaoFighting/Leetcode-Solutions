/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = [0]
    // 初始的宽度差
    var exp = 1
    for(let i = 1; i <= num; i++) {
      // 当下标i为2 * exp时, 即2的次方, 首位为1, 其余为0, 同时exp此时需要扩大一倍
      if (i == 2 * exp) {
        result[i] = 1
        exp *= 2
      } else {
        result[i] = 1 + result[i - exp]
      }
    }
    return result
};

