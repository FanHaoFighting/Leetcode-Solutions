/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var count = 0
    var z = x ^ y
    // 找出异或结果中1的个数
    while(z !== 0) {
      var d = z % 2
      if (d === 1) {
        count++
      }
      z = (z - d) / 2
    }
    return count
};

