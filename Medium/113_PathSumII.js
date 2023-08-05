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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const results = [];

    const dfs = (root, currSum, ans) => {
        if (root == null) return;
        if (currSum == root.val && root.left == null && root.right == null) {
                results.push([...ans, root.val]);
        }

        ans.push(root.val);
        dfs(root.left, currSum - root.val, ans);
        dfs(root.right, currSum - root.val, ans);
        ans.pop();
    };

    dfs(root, targetSum, [])

    return results;
}

export default pathSum;