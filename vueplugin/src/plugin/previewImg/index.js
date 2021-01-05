/**
 * @author caijianjia
 * @date 2021-01-04 09:57
 */
import Vue from 'vue'
import PreviewComp from './index.vue'

let instance = null
const getInstance = () => {
    if(!instance) {
        // 将组件通过Vue挂在到页面上
        const PreviewConstructor = Vue.extend(PreviewComp)
        instance = new PreviewConstructor()
        instance.$mount(document.createElement('div'))
        document.body.appendChild(instance.$el)
    }
    return instance
}

const PreviewImg = {
    show
}

export {
    PreviewImg
}

export default {
    install(Vue, options){
        Vue.prototype.$PreviewImg = {
            show
        }
    }
}

function show({src, duration = 2000, ...options}){
    const instance = getInstance()
    instance.show({isShow: true, src, duration, ...options})

    const fn = setTimeout(()=>{
        instance.hide()
        clearTimeout(fn)
    }, duration)
}
