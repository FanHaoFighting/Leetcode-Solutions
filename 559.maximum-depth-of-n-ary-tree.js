/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  if (root.children.length === 0) {
    return 1
  }
  return Math.max(...root.children.map(child => maxDepth(child))) + 1
};

