/**
 * @author caijianjia
 * @date 2021-09-29 09:15
 */
// 517. 超级洗衣机
//
// 假设有 n 台超级洗衣机放在同一排上。开始的时候，每台洗衣机内可能有一定量的衣服，也可能是空的。
//
// 在每一步操作中，你可以选择任意 m (1 <= m <= n) 台洗衣机，与此同时将每台洗衣机的一件衣服送到相邻的一台洗衣机。
//
// 给定一个整数数组 machines 代表从左至右每台洗衣机中的衣物数量，请给出能让所有洗衣机中剩下的衣物的数量相等的 最少的操作步数 。如果不能使每台洗衣机中衣物的数量相等，则返回 -1 。
//
//  
//
// 示例 1：
//
// 输入：machines = [1,0,5]
// 输出：3
// 解释：
// 第一步:    1     0 <-- 5    =>    1     1     4
// 第二步:    1 <-- 1 <-- 4    =>    2     1     3
// 第三步:    2     1 <-- 3    =>    2     2     2
// 示例 2：
//
// 输入：machines = [0,3,0]
// 输出：2
// 解释：
// 第一步:    0 <-- 3     0    =>    1     2     0
// 第二步:    1     2 --> 0    =>    1     1     1
// 示例 3：
//
// 输入：machines = [0,2,0]
// 输出：-1
// 解释：
// 不可能让所有三个洗衣机同时剩下相同数量的衣物。
//  
//
// 提示：
//
// n == machines.length
// 1 <= n <= 104
// 0 <= machines[i] <= 105

// 解题思路
// 1.判断总和能不能被n整除
// 2.求平均数
// 3.移动所有数直到每个数相同
// 4.要求步数最少 每一轮左右的所有洗衣机都可以给，但是一次只能给一件,可以给到不同的数量不够的洗衣机

/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
    let len = machines.length
    let sum = machines.reduce((a, b) => a + b, 0)

    if(sum % len !== 0){
        return -1
    }

    let average = sum / len

    // 一开始理解错题目了
    // 每一轮左右的所有洗衣机都可以给，但是一次只能给一件,可以给到不同的数量不够的洗衣机

    // 分成两组（消消乐^_^）
    // 一组是不够还差多少组
    // 一组是多出来的剩余组
    let A = [], B = [], index = 0
    machines.forEach(v=>{
        if(v - average > 0){
            B.push(v - average)
        } else if(average - v > 0) {
            A.push(average - v)
        }
    })
    while(A.length !== 0){
        debugger
        B.forEach((v, i)=>{
            let state = false
            if(B[i] > 0){
                if(A[0] === 0){
                    state = true
                    A.shift()
                }
                if(!state){
                    A[0]--
                    B[i]--
                }
            }
        })
        if(A[0] === 0){
            A.shift()
        }
        index++
    }

    // 一开始理解错题目了 以为相邻洗衣机移动一次就算一个步骤
    // machines.forEach((v, i) => {
    //     while(!obj[i]){
    //         if(machines[i] >= average){
    //             obj[i] = true
    //         } else {
    //             // 每一轮左右的所有洗衣机都可以给，但是一次只能给一件,可以给到不同的数量不够的洗衣机
    //             let step = 0, c = -1
    //             machines.forEach((q, b)=>{
    //                 if(machines[i] !== average && q > average && b !== i){
    //                     machines[i]++
    //                     machines[c]--
    //                 }
    //             })
    //             index++
    //         }
    //     }
    // })
    return index
};

console.log(findMinMoves([0,0,8,4]))
// console.log(findMinMoves([1]))
// console.log(findMinMoves([2,0,2,0,2,0,2,0,2,0,2,0]))
// console.log(findMinMoves([4,0,0,4]))
// console.log(findMinMoves([1,0,5]))
console.log(findMinMoves([0,3,0]))
// console.log(findMinMoves([0,2,0]))
