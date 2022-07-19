/**
 * @author caijianjia
 * @date 2021-10-18 15:56
 */
var findComplement = function(num) {
    // 将这个数转二进制
    let newNum = num.toString(2)
    newNum = newNum.replace(/([1|0]?)/g, (match, $1)=>{
        if(`${$1}` === `1`){
            return '0'
        } else if(`${$1}` === `0`) {
            return '1'
        }
        return ''
    })
    return parseInt(newNum, 2)
};
findComplement(5)
