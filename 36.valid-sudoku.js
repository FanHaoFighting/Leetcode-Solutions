/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (var i = 0; i < 9; i++) {
    if (!isValidUnit(board[i])) {
      return false
    }
    var arr = []
    for (var j = 0; j < 9; j++) {
      arr.push(board[j][i])
      if (i % 3 == 0 && j % 3 == 0) {
        var arr2 = []
        for (var m = i; m < i + 3; m++) {
          for (var n = j; n < j + 3; n++) {
            arr2.push(board[m][n])
          }
          if (!isValidUnit(arr2)) {
            return false
          }
        }
      }
    }
    if (!isValidUnit(arr)) {
      return false
    }
  }
  return true
};

var isValidUnit = function (arr) {
  var map = {}
  for (var i = 0; i < arr.length; i++) {
    var n = arr[i]
    if (n != ".") {
      if (map[n] == 1) {
        return false
      } else {
        map[n] = 1
      }
    }
  }
  return true
}

