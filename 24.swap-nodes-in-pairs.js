/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head
  }
  var node1 = head
  var node2 = head.next
  node1.next = swapPairs(node2.next)
  node2.next = node1
  return node2
};

