/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true
  }
  // (p == null && q = null) is not posible, the condition in if is same as: p == null && q != null || p != null && q == null
  if (!p || !q) {
    return false
  }
  if (p.val == q.val) {
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
  }
  return false
};



