import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueMaterial from 'vue-material'
import "vue-material/dist/vue-material.css"
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial) //使用 Material dashboard 
// Vue.material.theme.register('default', {
//   primary: 'cyan',
//   accent: 'pink'
// })


Vue.config.productionTip = false





//新建一个Vue 实例    每个Vue应用都是从这个地方开始的。
new Vue({
  render: h => h(App),
}).$mount('#app')




