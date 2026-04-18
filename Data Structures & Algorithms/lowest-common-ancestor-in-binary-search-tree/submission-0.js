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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        const traverse = (node) => {
            if (!node) return;

            if (p.val === node.val || q.val === node.val) {
                return node;
            }

            if (
                (p.val < node.val && q.val > node.val) || 
                (p.val > node.val && q.val < node.val)
            ) {
                return node;
            }

            if (p.val < node.val && q.val < node.val) {
                return traverse(node.left);
            };
            if (p.val > node.val && q.val > node.val) {
                return traverse(node.right);
            };
        }
        return traverse(root);
    }
}
