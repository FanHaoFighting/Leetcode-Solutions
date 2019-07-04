/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var resultObj = {}
  var resultArr = []

  function addElementToObj (element) {
    var key = element.split("").sort().join("")
    if (key in resultObj) {
      resultObj[key].push(element)
    } else {
      resultObj[key] = [element]
    }
  }

  strs.forEach(addElementToObj)

  for (key in resultObj) {
    resultArr.push(resultObj[key])
  }
  return resultArr
};

