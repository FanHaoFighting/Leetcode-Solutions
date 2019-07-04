/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head == null) {
    return false
  }
  let faster = head
  let slower = head
  while (faster.next != null && faster.next.next != null && slower.next != null) {
    faster = faster.next.next
    slower = slower.next
    if (faster == slower) {
      return true
    }
  }
  return false
};

