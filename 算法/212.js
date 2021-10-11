/**
 * @author caijianjia
 * @date 2021-09-16 17:19
 */

// 212. 单词搜索 II
// 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。
//
// 单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。
// 输入：board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// 输出：["eat","oath"]

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const res = [];
    // 矩阵的高和宽
    const [h, w] = [board.length, board[0].length];

    // 构建字典树 ["abcb"]
    const getTrie = words => {
        const root = Object.create(null);
        for (const word of words) {
            let node = root;
            for (const c of word) {
                if (!node[c]) node[c] = Object.create(null);
                node = node[c];
            }
            // 使用单词标记单词结尾
            node.isEnd = word;
        }
        return root;
    };

    // DFS 深度优先搜素
    const dfs = (trie, i, j) => {
        // 遍历到结尾
        if (trie.isEnd) {
            // 将结尾单词放入res
            res.push(trie.isEnd);
            trie.isEnd = null;
        }

        // 边界条件
        if (i < 0 || j < 0 || i >= h || j >= w) return;

        // 不在字典树中，返回
        if (!trie[board[i][j]]) return;

        const temp = board[i][j];
        // 标记已访问，以免再次遇到
        board[i][j] = '#';
        dfs(trie[temp], i, j - 1);
        dfs(trie[temp], i, j + 1);
        dfs(trie[temp], i - 1, j);
        dfs(trie[temp], i + 1, j);
        // 四个方向访问完毕，恢复字符
        board[i][j] = temp;
    };

    // 遍历网格
    const trie = getTrie(words);
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            dfs(trie, i, j);
        }
    }
    return res;
};


console.log(findWords([["a","b"],["c","d"]],
    ["abcb"]))
console.log(findWords([
    ["b","b","a","a","b","a"],
    ["b","b","a","b","a","a"],
    ["b","b","b","b","b","b"],
    ["a","a","a","b","a","a"],
    ["a","b","a","a","b","b"]],
    ["abbbababaa"]))
console.log(findWords([["o"]],
    ["o"]))
console.log(findWords([["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]],
    ["oa","oaa"]))
console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
    ["oath","pea","eat","rain"]))
