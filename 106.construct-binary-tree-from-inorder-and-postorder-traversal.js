/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) {
    return null
  }
  var rootVal = postorder[postorder.length - 1]
  var rootPos = inorder.indexOf(rootVal)

  var inOrderLeft = inorder.slice(0, rootPos)
  var inOrderRight = inorder.slice(rootPos + 1)

  var postorderLeft = postorder.slice(0, rootPos)
  var postorderRight = postorder.slice(rootPos, -1)

  var root = new ListNode(rootVal)
  root.left = buildTree(inOrderLeft, postorderLeft)
  root.right = buildTree(inOrderRight, postorderRight)
  return root
};



