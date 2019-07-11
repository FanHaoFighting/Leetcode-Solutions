/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var arr1 = listNodeToArray(l1)
  var arr2 = listNodeToArray(l2)
  return arrayToList(addTwoArray(arr1, arr2))
  
};

function arrayToList(ary) {
  var dummy = {
    val: undefined,
    next: null,
  }
  var prev = dummy;
  for (var i = 0; i < ary.length; i++) {
    var node = {
      val: ary[i],
      next: null,
    }
    prev.next = node;
    prev = node;
  }
  return dummy.next;
}
var listNodeToArray = function(head) {
  var arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

var addTwoArray = function(arr1, arr2) {
  var i = arr1.length - 1
  var j = arr2.length - 1
  var res = 0
  var digit = 1
  while (i >= 0 || j >= 0) {
    var first = i >= 0 ? arr1[i] : 0
    var second = j >= 0 ? arr2[j] : 0
    res += (first + second) * digit
    digit *= 10
    i--
    j--
  }
  return res
}

