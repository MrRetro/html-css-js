/**
 * @author caijianjia
 * @date 2020-12-15 09:56
 */

let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject()
    })
})

let promise1 = promise.then(null, ()=>{})
let promise2 = promise1.then(()=>{console.log('完成')}, ()=>{console.log('失败')})
