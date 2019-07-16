/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) {
    return null
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key)
    return root
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key)
    return root
  }
  if (key == root.val) {
    // 无左树或者右树时相应地返回右树或者左树
    if (!root.left) {
      return root.right
    }
    if (!root.right) {
      return root.left
    }
    // 如果右树只有一个节点, 则将该节点挪到根节点的位置
    if (root.right && !root.right.right && !root.right.left) {
      root.right.left = root.left
      return root.right
    }
    if (root.left && !root.left.right && !root.left.left) {
      root.left.right = root.right
      return root. left
    }
    // 如果为叶子节点, 直接删除
    if (!root.left && !root.right) {
      return null
    }
    // 节点后续跟着一大串数, 根节点的值换为将左树最大值, 并删除出左树对应的叶子节点
    var leftMaxNode = getMaxNode(root.left)
    root.val = leftMaxNode.val
    root.left = deleteNode(root.left, leftMaxNode.val)
    return root
  }

};

function getMaxNode(root) {
  while (root.right) {
    root = root.right
  }
  return root
}

