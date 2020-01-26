import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/Login.vue'


Vue.use(Router)

export default new Router({
    routes: [
    //    {path: '/', redirect: '/login'},//重定向
       {path: '/login', component: Login} 

    ]
})