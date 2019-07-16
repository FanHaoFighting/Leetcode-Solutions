/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root, side) {
  if (root) {
    if (isLeafNode(root) && side == 'l') {
      return root.val + sumOfLeftLeaves(root.right, 'r')
    } else {
      return sumOfLeftLeaves(root.left, 'l') + sumOfLeftLeaves(root.right, 'r')
    }
  } else {
    return 0
  }
}

var isLeafNode = function (node) {
  return node && (!node.left && !node.right)
}

