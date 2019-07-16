/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  if (t === null) {
    return ""
  }
  if (t.left === null && t.right !== null) {
    res += "()" 
  } 
  if (t.left !== null) {
    res += "(" + tree2str(t.left) + ")"
  }
  if (t.right !== null) {
    res += "(" + tree2str(t.right) + ")"
  }
  return res
};


