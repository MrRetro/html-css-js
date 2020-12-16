/**
 * @author caijianjia
 * @date 2020-12-16 09:28
 */

Promise.raceLimit = (list, limit = 1) => {
    return new Promise((resolve, reject) => {
        let count = 0
        let arr = []

        const nextRun = value => {
            console.log(`${value}.当前队列有${count}正在执行 未处理Promise剩余${arr.length}`)
            count--
            if(arr.length){
                count++
                run(arr.shift())
            }
        }

        const run = value => {
            Promise.resolve(value).then(res => {
                nextRun(res)
            }, err => {
                nextRun(err)
            }).catch((err) => {
                nextRun(err)
            })
        }

        for (let p of list) {
            if(count < limit){
                count++
                run(p)
            } else {
                arr.push(p)
            }
        }
    })
}
Promise.raceLimit([
    new Promise((resolve,reject) => setTimeout(()=>reject(1), 100)),
    new Promise(resolve => setTimeout(()=>resolve(2), 200)),
    new Promise(resolve => setTimeout(()=>resolve(3), 100)),
    new Promise(resolve => setTimeout(()=>resolve(4), 100)),
], 2)
