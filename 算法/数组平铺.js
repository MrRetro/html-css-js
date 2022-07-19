/**
 * @author caijianjia
 * @date 2021-12-05 21:28
 */

const arr = [1, 2, 3, 4, 5, [6, 7, 8, [9]]]

const mapFlat = arr => {
    const loop = res => {
        let re = []

        for (let i = 0; i < res.length; i++){
            if(Array.isArray(res[i])){
                re.splice(i, 0, ...loop(res[i]))
            } else {
                re.push(res[i])
            }
        }
        return re
    }

    return loop(arr)
}

console.log(mapFlat(arr))
