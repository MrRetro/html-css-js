/**
 * @author caijianjia
 * @date 2021-11-15 17:01
 */
// 翻转一棵二叉树。
//
// 示例：
//
// 输入：
//
//      4
//      /   \
//   2     7
// / \   / \
// 1   3 6   9
// 输出：
//
//      4
//      /   \
//   7     2
// / \   / \
// 9   6 3   1
// 备注:
//     这个问题是受到 Max Howell 的 原问题 启发的 ：
//
// 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。


function TreeNode(val, left, right) {
 this.val = (val===undefined ? 0 : val)
 this.left = (left===undefined ? null : left)
 this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

let root = new TreeNode(4)

    root.left = new TreeNode(2)
    root.right = new TreeNode(7)

    root.left.left = new TreeNode(1)
    root.left.right = new TreeNode(3)

    root.right.left = new TreeNode(6)
    root.right.right = new TreeNode(9)

console.log(invertTree(root))
