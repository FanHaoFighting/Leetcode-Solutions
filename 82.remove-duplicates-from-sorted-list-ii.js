/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head
  }
  if (head.val != head.next.val) {
    head.next = deleteDuplicates(head.next)
    return head
  } else {
    while (head.next != null && head.val == head.next.val) {
      head = head.next
    }
    return deleteDuplicates(head.next)
  }
};

