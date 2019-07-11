/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var index  = 0
  var dummy = new ListNode
  dummy.next = head
  var cur = dummy
  var preM
  var mNode
  var nNode
  var temp = null
  var nNext
  while (index <= n) {
    if (index < m - 1) {
      cur = cur.next
    } else if (index == m - 1) {
      preM = cur
      mNode = cur.next
      cur = cur.next
    } else if (index >= m && index <= n) {
      var next = cur.next
      cur.next = temp
      temp = cur 
      cur = next
      if (index == n) {
        nNode = temp
        nNext = cur
      }
    } 
    index++
  }
  preM.next = nNode
  mNode.next = nNext
  return dummy.next
};

