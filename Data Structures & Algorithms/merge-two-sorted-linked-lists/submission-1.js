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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoListsBrute(list1, list2) {
        let newList = new ListNode();
        let current = newList;
        let currentList1 = list1;
        let currentList2 = list2;
        while (currentList1 || currentList2) {
            const nullCheck = currentList1 && currentList2
            if ((nullCheck && currentList1.val < currentList2.val) || 
                (nullCheck && currentList1.val === currentList2.val)
            ) {
                current.next = new ListNode(currentList1.val);
                currentList1 = currentList1.next;
            } else if (nullCheck && (currentList1.val > currentList2.val)) {
                current.next = new ListNode(currentList2.val);
                currentList2 = currentList2.next;
            } else if (!currentList1 || !currentList2) {
                const activeList = currentList1 || currentList2;
                current.next = activeList;
                break;
            }
            current = current.next;
        }
        return newList.next;
    }

    mergeTwoLists(list1, list2) {
        let newList = new ListNode();
        let current = newList;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        current.next = list1 || list2;

        return newList.next;
    }
}
