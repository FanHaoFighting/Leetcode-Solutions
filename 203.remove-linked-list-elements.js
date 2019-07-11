/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) {
    return head
  }
  var dummy = new ListNode()
  dummy.next = head
  if (head.val === val) {
    dummy.next = head.next
  }
  return dummy.next
};

