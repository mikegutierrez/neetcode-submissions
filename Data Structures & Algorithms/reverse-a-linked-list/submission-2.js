/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let current = head;
        let previous = null;
        let nextNode;

        while (current) {
            nextNode = current.next; // 1. save what's ahead
            current.next = previous; // 2. reverse the pointer
            previous = current; // 3. move prev forward
            current = nextNode; // 4. move node forward
        }

        return previous;
    }
}
