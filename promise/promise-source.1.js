const isFunction = variable => typeof variable === 'function'
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  constructor(handle) {
    this._status = PENDING
    this._value = undefined
    this._fulfilledQueues = []
    this._rejectedQueues = []

    try {
      handle(this._resolve.bind(this), this._reject.bind(this))
    } catch (err) {
      this._reject(err)
    }
  }

  _resolve(val) {
    const run = () => {
      if (this._status !== PENDING) return
      const runFulfilled = (value) => {
        let cb;
        while (cb = this._fulfilledQueues.shift()) {
          cb(value)
        }
      }
      const runRejected = (error) => {
        let cb;
        while (cb = this._rejectedQueues.shift()) {
          cb(error)
        }
      }

      if (val instanceof Promise) {
        val.then(value => {
          this._value = value
          this._status = FULFILLED
          runFulfilled(value)
        }, err => {
          this._value = err
          this._status = REJECTED
          runRejected(err)
        })
      } else {
        this._value = val
        this._status = FULFILLED
        runFulfilled(val)
      }
    }
    setTimeout(run, 0)
  }

  _reject(err) {
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

  then(onFulfilled, onRejected) {
    const {
      _value,
      _status
    } = this
    return new Promise((onFulfilledNext, onRejectedNext) => {
      let fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value)
          } else {
            let res = onFulfilled(value);
            if (res instanceof Promise) {
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
            if (res instanceof Promise) {
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

  catch (onRejected) {
    return this.then(null, onRejected)
  }

  static resolve(value) {
    if (value instanceof Promise) return value
    return new Promise(resolve => resolve(value))
  }

  static reject(value) {
    return new Promise((resolve, reject) => reject(value))
  }
  static all(list) {
    return new Promise((resolve, reject) => {
      let values = []
      let count = 0
      for (let [i, p] of list.entries()) {
        this.resolve(p).then(res => {
          values[i] = res
          count++
          if (count === list.length) resolve(values)
        }, err => {
          reject(err)
        })
      }
    })
  }

  static race(list) {
    return new Promise((resolve, reject) => {
      for (let p of list) {
        this.resolve(p).then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }
}


// Trigger STATE: REJECTED, FULFILLED
const p1 = new Promise((resolve, reject) => {
  throw new Error('promise1')
})
const p2 = new Promise((resolve, reject) => {
  resolve('promise2')
})
new Promise(resolve => resolve(p1))
new Promise(resolve => resolve(p2)).then(val => console.log('trigger fulfilled', val))
