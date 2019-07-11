
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null
  }
  var curA = headA
  var curB = headB
  while (curA != curB) {
    curA = curA ? curA.next : headB
    curB = curB ? curB.next : headA
  }
  return curA
};

