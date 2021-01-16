/**
 * @author caijianjia
 * @date 2021-01-16 15:07
 */
class Event {
    constructor(name){
        this.name = name
        this.observers = {}
    }

    on = (type, fn) => {
        if(this.observers[type]){
            this.observers[type].push(fn)
        } else {
            this.observers[type] = [fn]
        }
    }

    emit = (type, opt) => {
        this.observers[type].map(item=>item(opt))
    }

    off = (type) => {
        delete this.observers[type]
    }
}

const events = new Event()
export default events
