/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  var length = getListLength(head)
  if (length == 0) {
    return head
  }
  // the result has a period of length as it varies with k
  k = k % length
  if (k == 0) {
    return head
  }
  cur = head
  var index = 0
  // the list seperate here, The first half and the second half switch to each other
  // after the while loop, cur changes to the last node of the first half
  while (index < length - 1 - k) {
    cur = cur.next
    index++
  }
  // resNode is the first node of the second half
  var resNode = cur.next
  cur.next = null
  cur = resNode
  while (cur.next != null) {
    cur = cur.next
  }
  // first half and the second half switch to each other
  cur.next = head
  return resNode
};

var getListLength = function(head) {
  var length = 0
  while (head !== null) {
    length++
    head = head.next
  }
  return length
}


