import Vue from 'vue'
import App from './App.vue'
import PreviewImg from './plugin/previewImg/index'
import Comps from './components/index'
import {config} from './config/app'

Vue.use(PreviewImg)
    .use(Comps)

Vue.config.productionTip = false
Vue.prototype.$device = config.device


new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
