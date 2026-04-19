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
            current.next = previous;  // 2. detach from the list ahead, attach to the reversed list behind
            previous = current; // 3. move previous forward
            current = nextNode; // 4. move current forward
        }

        return previous;
    }
}
