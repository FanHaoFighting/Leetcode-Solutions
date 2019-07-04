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
  let fakeHead = new ListNode()
  fakeHead.next = head
  let cur = fakeHead
  while (cur.next != null) {
    if(cur.next.val == val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return fakeHead.next
};

