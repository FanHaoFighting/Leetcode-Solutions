/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let fakeHead = new ListNode
  fakeHead.next = head
  let cur = fakeHead
  while (cur.next != null && cur.next.next != null) {
      let node1 = cur.next
      let node2 = cur.next.next
      node1.next = node2.next
      node2.next = node1
      cur.next = node2
      cur = node1
  }
  return fakeHead.next
};

