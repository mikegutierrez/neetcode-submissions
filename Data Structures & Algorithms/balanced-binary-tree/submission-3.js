/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        function DFS(node) {
            if (!node) return 0;
            const left = DFS(node.left);
            const right = DFS(node.right);
            if (left === -1 || right === -1) return -1;
            return Math.abs(left - right) > 1 ? -1 : 1 + Math.max(left, right);
        }
        var output = DFS(root);
        return output >= 0;
    }
}
