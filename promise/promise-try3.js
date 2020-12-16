/**
 * @author caijianjia
 * @date 2020-12-15 10:45
 */

// 判断是否函数
const isFunction = val => ({}).toString.call(val) === '[object Function]'
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class iPromise {
    constructor(hanlde) {
        this._state = PENDING
        this._value = undefined
        this._fulfilledQueues = [] // 收集fulfilled集合
        this._rejectedQueues = [] // 收集rejected集合

        try {
            // 这边参数的上下文会被handle拿去，使用bind把this指向当前Promise上下文
            hanlde(this._resolve.bind(this), this._reject.bind(this))
        } catch (err) {
            this._reject(err)
        }
    }

    _resolve(val){
        const run = () => {
            if(this._state !== PENDING) return
            const runFulfilled = value => {
                let cb
                while(cb = this._fulfilledQueues.shift()){
                    cb(value)
                }
            }
            const runRejected = error => {
                let cb
                while(cb = this._rejectedQueues.shift()){
                    cb(error)
                }
            }

            if(val instanceof iPromise){
                val.then(value=>{
                    this._value = value
                    this._state = FULFILLED
                    runFulfilled(value)
                }, err=>{
                    this._value = err
                    this._state = REJECTED
                    runRejected(err)
                })
            } else {
                this._value = val
                this._state = FULFILLED
                runFulfilled(val)
            }
        }
        setTimeout(run, 0)
    }

    _reject(err){
        console.log(this._rejectedQueues)
        if (this._status !== PENDING) return
        const run = () => {
            this._status = REJECTED
            this._value = err
            let cb;
            while (cb = this._rejectedQueues.shift()) {
                cb(err)
            }
        }
        setTimeout(run, 0);
    }

    // then的返回值一定是Promise
    then(onFulfilled, onRejected){
        const {
            _value,
            _status
        } = this
        return new iPromise((onFulfilledNext, onRejectedNext) => {
            let fulfilled = value => {
                try {
                    if (!isFunction(onFulfilled)) {
                        onFulfilledNext(value)
                    } else {
                        let res = onFulfilled(value);
                        if (res instanceof iPromise) {
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            onFulfilledNext(res)
                        }
                    }
                } catch (err) {
                    onRejectedNext(err)
                }
            }

            let rejected = error => {
                try {
                    if (!isFunction(onRejected)) {
                        onRejectedNext(error)
                    } else {
                        let res = onRejected(error);
                        if (res instanceof iPromise) {
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            onFulfilledNext(res)
                        }
                    }
                } catch (err) {
                    onRejectedNext(err)
                }
            }
            switch (_status) {
                case PENDING:
                    this._fulfilledQueues.push(fulfilled)
                    this._rejectedQueues.push(rejected)
                    break
                case FULFILLED:
                    fulfilled(_value)
                    break
                case REJECTED:
                    rejected(_value)
                    break
            }
        })
    }
}

new iPromise((resolve, reject)=>{
    resolve()
})
    .then(
        ()=>{console.log(1)},
        ()=>{console.log(2)}
    )
    .then(
        ()=>{console.log('已完成')},
        ()=>{console.log('已拒绝')}
    )
