/**
 * @author caijianjia
 * @date 2021-10-18 19:35
 */
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//  
//
// 示例 1：
//
// 输入：s = "()"
// 输出：true
// 示例 2：
//
// 输入：s = "()[]{}"
// 输出：true
// 示例 3：
//
// 输入：s = "(]"
// 输出：false
// 示例 4：
//
// 输入：s = "([)]"
// 输出：false
// 示例 5：
//
// 输入：s = "{[]}"
// 输出：true
//
//
// 提示：
//
// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let newS = s.split('')
    let len = newS.length
    let arr = []
    let arrLen
    for(let i = 0; i < len; i++){
        arr.push(newS[i])
        arrLen = arr.length
        if(arrLen>=2){
            if(
                (arr[arrLen - 2] === '(' && arr[arrLen - 1] === ')') ||
                (arr[arrLen - 2] === '{' && arr[arrLen - 1] === '}') ||
                (arr[arrLen - 2] === '[' && arr[arrLen - 1] === ']')
            ){
                arr.pop()
                arr.pop()
            }
        }
    }
    return !arr.length
};
console.log(isValid("()[]{}"))
console.log(isValid("{[]}"))

