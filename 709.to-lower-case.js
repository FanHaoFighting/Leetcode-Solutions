/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  for (let i = 0; i < str.length; i++) {
    str.charAt(i) = str.charAt(i).toLowerCase
  }
};

