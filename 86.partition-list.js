/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  var left = new ListNode
  var res = left
  var right = new ListNode
  var rightOrigin = right
  while (head) {
    if (head.val >= x) {
      right.next = new ListNode(head.val)
      right = right.next
    } else {
      left.next = new ListNode(head.val)
      left = left.next
    }
    head = head.next
  }
  left.next = rightOrigin.next
  return res.next
};

