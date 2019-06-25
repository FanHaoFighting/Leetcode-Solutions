/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let arr = new Array
    for (let i = left; i <= right; i++) {
      let temp = i
      while (temp != 0) {
        let digit = temp % 10
        if (i % digit != 0) {
          break
        }
        temp = (temp - digit) / 10
        if (temp === 0) {
          arr.push(i)
        }
      }
    }
    return arr
};

