/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let res = ""
  let diff = 32
  for (let i = 0; i < str.length; i++) {
    let tempChar
    if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) {
      tempChar = String.fromCharCode(str.charCodeAt(i) + diff)
    } else {
      tempChar = str.charAt(i)
    }
    res += tempChar
  }
  return res
};

