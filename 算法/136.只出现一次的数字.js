/**
 * @author caijianjia
 * @date 2021-10-18 16:22
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 思路
    // 标签：位运算
    // 本题根据题意，线性时间复杂度 O(n)O(n)，很容易想到使用 Hash 映射来进行计算，遍历一次后结束得到结果，但是在空间复杂度上会达到 O(n)O(n)，需要使用较多的额外空间
    // 既满足时间复杂度又满足空间复杂度，就要提到位运算中的异或运算 XOR，主要因为异或运算有以下几个特点：
    // 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
    // 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
    // XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
    // 故而在以上的基础条件上，将所有数字按照顺序做抑或运算，最后剩下的结果即为唯一的数字
    // 时间复杂度：O(n)O(n)，空间复杂度：O(1)O(1)
    let ans = 0;
    for(const num of nums) {
        ans ^= num;
    }
    return ans;
};
console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
