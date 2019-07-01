/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {

  let count = 0
  for (let i = 0; i < S.length; i++) {
    if (J.indexOf(S[i]) >= 0) {
      count++
    }
  }
  return count
};

