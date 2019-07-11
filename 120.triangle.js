/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {

  var cache = {}
  return minCollect(0, 0)
  function minCollect(row, col) {

    var key = row + "," + col
    if (key in cache) {
      return cache[key]
    }

    if (row == triangle.length - 1) {
      return triangle[row][col]
    }
    cache[key] = triangle[row][col] + Math.min(minCollect(row + 1, col), minCollect(row + 1, col + 1))
    return cache[key]
  }
};

