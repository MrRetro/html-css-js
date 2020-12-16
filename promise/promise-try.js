/**
 * @author caijianjia
 * @date 2020-12-14 13:41
 */
// 异步执行 函数做为参数
class SelfPromise {
    constructor(func){ // 构造函数只有一个参数 参数类型为Function
        this.state = 'pending' // promise当前状态
        this.value = undefined //

        this.fulfilledList = [] // promise收集所有fulfilled函数
        this.rejectedList = [] // promise收集所有rejected函数

        func(this.listenerResolve.bind(this), this.listenerReject.bind(this)) // 回调最后的resolve
    }
    listenerResolve(val){
        setTimeout(()=>{
            this.state = 'fulfilled'
            this.value = val

            this.fulfilledList.forEach(item=>item(val))
            this.fulfilledList = []
        })
    }
    listenerReject(val){
        setTimeout(()=>{
            this.state = 'rejected'
            this.value = val

            this.rejectedList.forEach(item=>item(val))
            this.rejectedList = []
        })
    }
    then(onFulfilled, onRejected){
        const {value, state} = this

        return new SelfPromise((onNextFulfilled, onNextRejected)=>{

            function onFinalFulfilled(val){
                if(typeof onFulfilled !== 'function'){
                    onNextFulfilled(val)
                } else {
                    const res = onFulfilled(val)

                    if(res && typeof res.then === 'function'){
                        res.then(onNextFulfilled)
                    } else {
                        onNextFulfilled(res)
                    }
                }
            }

            function onFinalRejected(val){
                if(typeof onRejected !== 'function'){
                    onNextRejected(val)
                } else {
                    const res = onRejected(val)

                    if(res && typeof res.then === 'function'){
                        res.then(onRejected)
                    } else {
                        onNextRejected(res)
                    }
                }
            }

            switch (state) {
                case 'pending':
                    this.fulfilledList.push(onFinalFulfilled)
                    this.rejectedList.push(onFinalRejected)
                    break
            }
        })
    }
}

const createPromise = function (time) {
    return new SelfPromise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Date().getTime())
        }, time)
    })
}

const promiseInstance = createPromise(1000)

promiseInstance
    .then(function () {
        return 'promise.then:hello world'
    }, function () {
        console.log('promise.reject')
        return '123'
    })
    .then(null, ()=>{return '456'})
    .then(resolve=>console.log('resolve==>', resolve), (reject)=>console.log('reject=>', reject))

// Promise.all([createPromise(2000), createPromise(1000)])
//     .then(res=>{
//         console.log('Promise.all', res)
//     })
