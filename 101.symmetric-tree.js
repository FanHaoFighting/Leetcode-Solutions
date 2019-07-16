/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return root === null || judgeSymmetric(root.right, root.left)
};

var judgeSymmetric = function(left, right) {
  if (left === null || right === null) {
    return left === right
  } 
  return left.val === right.val && judgeSymmetric(left.right, right.left) 
    && judgeSymmetric(left.left, right.right)
}

