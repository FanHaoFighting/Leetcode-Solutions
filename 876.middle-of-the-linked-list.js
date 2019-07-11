/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let end = head
  let mid = head
  while (end.next && end.next.next) {
    end = end.next.next
    mid = mid.next
  }
  if (end.next) {
    mid = mid.next
  }
  return mid
};

