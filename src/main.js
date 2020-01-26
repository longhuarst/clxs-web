import Vue from 'vue'
import App from './App.vue' //根组件
import './plugins/element.js'
// import VueMaterial from 'vue-material'
// import "vue-material/dist/vue-material.css"
// import 'vue-material/dist/theme/default.css'


//导入路由 
import router from './router';


// Vue.use(VueMaterial) //使用 Material dashboard 
// Vue.material.theme.register('default', {
//   primary: 'cyan',
//   accent: 'pink'
// })


//在app入口 注册bootstrapvue
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//引入bootstrap和bootstrapVue css文件
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//引入 custom.scss 如果自定才引入
// import './custom.scss'

//全局变量
import common from './components/common.vue'
Vue.prototype.common = common;

//导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8081/'
Vue.prototype.$http = axios

Vue.config.productionTip = false





//新建一个Vue 实例    每个Vue应用都是从这个地方开始的。
new Vue({
  router,
  render: h => h(App),


  data:{
    a:1
  },




  created: function(){
    // 'this' 指向 vm 实例
    window.console.log('a is: '+this.a);
  }




}).$mount('#app')


//生命周期





