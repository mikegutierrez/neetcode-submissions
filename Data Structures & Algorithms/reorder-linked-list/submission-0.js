/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/**
 * Find the middle of the linked list
 * Reverse the second half
 * Merge the two halves together
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let middle = slow.next;
        slow.next = null;

        let previous = null;
        while (middle) {
            const nextNode = middle.next;
            middle.next = previous;
            previous = middle;
            middle = nextNode;
        }

        let reversed = previous;
        while (head && reversed) {
            const nextHead = head.next;
            const nextReversed = reversed.next;

            head.next = reversed;
            reversed.next = nextHead;
            
            head = nextHead;
            reversed = nextReversed;
        }
    }
}
