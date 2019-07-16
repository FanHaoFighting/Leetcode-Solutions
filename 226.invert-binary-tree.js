/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
    return root
  } 
  var l = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(l)
  return root
};

