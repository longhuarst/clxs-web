<template>

  <div id="app">

    <router-view></router-view>
    <!-- 路由占位符 -->


    

  </div>



  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DashBoard from './components/dashboard.vue'

// import Login from './components/Login.vue'
// import Register from './components/Register.vue'

// import Head from './components/Head.vue'

import global from './components/common.vue'


// import Vue from 'vue'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'


// var register = false;
// var login = false;



export default {
  name: 'app',
  components: {
    // HelloWorld,
    // DashBoard,
    // Login,
    // Register,
    // Head,
  },
  data(){
        return{
            global_register:global.register,
            global_login:global.login,
            global_logined:global.logined,
            global_user:global.user,
            global_fun:global.commonFun,
        }
        
    }

  // xdata:{
  //   register:register,
  //   login:login,
  // },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;  /* 顶部靠紧 */ 
}
</style>
