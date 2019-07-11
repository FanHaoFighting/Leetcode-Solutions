/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // !head to handle the situation of blank ListNode []
  if (!head || !head.next) {
    return head
  }

  var newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
};

