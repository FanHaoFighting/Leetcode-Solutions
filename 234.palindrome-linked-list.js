/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true
  }
  var end = head
  var mid = head
  while (end.next && end.next.next) {
    end = end.next.next
    mid = mid.next
  }
  mid = mid.next
  mid = reverseList(mid)
  while(mid) {
    if (head.val != mid.val) {
      return false
    }
    mid = mid.next
    head = head.next
  }
  return true
};

var reverseList = function(head) {
  var newHead = null
  while (head) {
    var next = head.next
    head.next = newHead
    newHead = head
    head = next
  }
  return newHead
}
