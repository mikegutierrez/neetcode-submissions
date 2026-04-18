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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;
        function DFS(node) {
            if (!node) return 0;
            const leftDepth = DFS(node.left);
            const rightDepth = DFS(node.right);
            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
            return 1 + Math.max(leftDepth, rightDepth);
        }
        DFS(root);
        return maxDiameter;
    }
}
