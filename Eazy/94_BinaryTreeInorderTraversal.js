/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (root) {
        let arr1 = [];
        let arr2 = [];

        if (root?.right) {
            arr1 = inorderTraversal(root.right);
        }

        if (root?.left) {
            arr2 = inorderTraversal(root.left);
        }

        return [...arr2, root.val, ...arr1]
    }

    return [];
};