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
     * @return {boolean}
     */
    // Space: O(n)
    // Time: O(n)
    hasCycleNspace(head) {
        const set = new Set();
        let current = head;
        while (current) {
            if (set.has(current)) return true;
            set.add(current);
            current = current.next;
        }
        return false;
    }

    // Floyd's Cycle Detection
    // Space: O(1)
    // Time: O(n)
    hasCycle(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) return true;
        }
        return false;
    }
}
