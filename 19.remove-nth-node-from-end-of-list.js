/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var dummy = new ListNode
  dummy.next = head
  var faster = dummy
  var slower = dummy
  var count = 0
  while (faster.next != null) {
    faster = faster.next
    if (count >= n ) {
      slower = slower.next
    }
    count++
  }
  slower.next = slower.next.next
  return dummy.next
};

