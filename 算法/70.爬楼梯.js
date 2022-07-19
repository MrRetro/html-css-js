/**
 * @author caijianjia
 * @date 2021-10-18 16:54
 */
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
//
// 注意：给定 n 是一个正整数。
//
// 示例 1：
//
// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：
//
// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 找规律
    // 1阶 1种
    // 2阶 2种
    // 3阶 3种
    // 4阶 5种 1111 211 121 112 22
    // 发现每次都是前两次之和
    // const func =(n)=>{
    //     if(n === 1){
    //         return 1
    //     } else if(n === 2){
    //         return 2
    //     } else{
    //         return func(n-1) + func(n-2)
    //     }
    // }
    // return func(n)
    const dp = [];
    dp[0] = 1;
    dp[1] = 2;
    for(let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n-1];
};
console.log(climbStairs(37))
