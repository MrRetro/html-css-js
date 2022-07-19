/**
 * @author caijianjia
 * @date 2021-10-27 17:15
 */
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
//
// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
//
// 假设环境不允许存储 64 位整数（有符号或无符号）。


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = `${x}`
    let sub = false
    if(str[0] === '-'){
        sub = true
        str = str.slice(1)
    }
    let arr = str.split('')
    arr = arr.reverse().join('')
    arr = sub?-arr:arr
    // 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0
    if(
        arr < Math.pow(-2, 31) ||
        arr > Math.pow(2, 31) - 1
    ){
        return 0
    }
    return arr
};
