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
var sortList = function (head) {
  var p = head
  while (p.next) {
    if (p.val > p.next.val) {
      p.next = val
    }
  }
};

var swapTwo = function(node1, node2) {
  if (node1.val > node2.val) {
    var temp = node2.next
    node2.next = node1
    node1.next = next
  }
}

var mergeTwoLists = function(l1, l2) {
  var dummy = new ListNode
  var cur = dummy
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  cur.next = l1 || l2
  return dummy.next
}

