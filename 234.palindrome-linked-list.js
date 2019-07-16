/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  var cur = head
  return travel(head)
  function travel (node) {
    if (!node) {
      return true
    }
    var preBoolean = travel(node.next)
    var curBoolean = cur.val === node.val
    cur = cur.next
    return preBoolean && curBoolean
  }
};

