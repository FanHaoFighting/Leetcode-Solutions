/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  return traverse(root)

  function traverse(root, result = [], depth = 0) {
    if (root) {
      if (depth in result) {
        result[depth].push(root.val)
      } else {
        result[depth] = [root.val]
      }
      traverse(root.left, result, depth + 1)
      traverse(root.right, result, depth + 1)
    }
    return result
  }
};

