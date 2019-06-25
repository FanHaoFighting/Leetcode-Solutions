/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let newHead = new ListNode(-1)
    while (head != null) {
      // newHead.next保存了head在链表反转过程中head.next所应指向
      // 的节点, 如果直接用newHead而不用newHead.next的话返回的链表
      // 有newHead节点的冗余值
      let next = head.next
      head.next = newHead.next
      newHead.next = head
      head = next
    }
    return newHead.next
};

