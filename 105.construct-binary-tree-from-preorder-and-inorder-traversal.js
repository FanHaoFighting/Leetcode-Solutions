/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return buildTreeHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};

function buildTreeHelper (preOrder, preStart, preEnd, inOrder, inStart, inEnd) {
  
  if (preStart > preEnd) {
    return null
  }
  var rootVal = preOrder[preStart]
  var rootPos = inOrder.indexOf(rootVal)

  var root = new TreeNode(rootVal)
  root.left = buildTreeHelper(preOrder, preStart + 1, preStart + rootPos - inStart, inOrder, inStart, rootPos - 1)
  root.right = buildTreeHelper(preOrder, preStart + rootPos - inStart + 1, preEnd, inOrder, rootPos + 1, inEnd)
  return root
}

