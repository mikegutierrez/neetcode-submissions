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
     * @return {number}
     */
    maxDepth(root) {
        function DFS(node) {
            if (!node) return 0;
            return Math.max(1 + DFS(node.left), 1 + DFS(node.right));
        }
        return DFS(root);
    }
}
