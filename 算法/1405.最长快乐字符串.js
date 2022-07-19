/**
 * @author caijianjia
 * @date 2022-02-07 11:14
 */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    // a=1 b=1 c=7
    // 1.判断最大长度是谁
    // 2.判断是否满足快乐字符串
    // 3.直到所有值都为0
    const A = 'a', B = 'b', C = 'c'
    let obj = {
        [A]: a,
        [B]: b,
        [C]: c
    }
    const getMax = (a, b, c) => {
        let type = A
        let max = a

        if(b > max) {
            type = B
            max = b
        }

        if(c > max) {
            type = C
        }

        return {
            type,
            next: !(!(a+b) || !(a+c) || !(b+c))
        }
    }
    let result = ''

    while(getMax(obj[A], obj[B], obj[C]).next){
        let curObj = getMax(obj[A], obj[B], obj[C])
        // 如果满足追加
        if( result.length < 2 ||
            !(
                result.length >= 2 &&
                (result.slice(-1) === result.slice(-2, -1)) &&
                (result.slice(-1) === curObj.type)
            )
        )
        {
            result += curObj.type
            obj[curObj.type]--
        } else {

        }
        console.log(curObj, result)
    }
    return result
};
let test = longestDiverseString(1,1,7)
console.log(test)
