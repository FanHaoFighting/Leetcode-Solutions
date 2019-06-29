/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = [0]
    for(let i = 1; i <= num; i++) {
      result[i] = 1 + result[i & (i - 1)]
    }
    return result
};

