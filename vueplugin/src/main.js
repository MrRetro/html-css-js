import Vue from 'vue'
import App from './App.vue'
import PreviewImg from './plugin/previewImg/index'

Vue.use(PreviewImg)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
