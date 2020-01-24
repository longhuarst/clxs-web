<template>

  <div id="app">

    <Head/>

    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <DashBoard/>


    <Register v-if="register" />
    <Login v-if="login" />

  </div>



  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DashBoard from './components/dashboard.vue'

import Login from './components/Login.vue'
import Register from './components/Register.vue'

import Head from './components/Head.vue'



// import Vue from 'vue'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'


var register = false;
var login = false;



export default {
  name: 'app',
  components: {
    HelloWorld,
    DashBoard,
    Login,
    Register,
    Head,
  },

  xdata:{
    register:register,
    login:login,
  },
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
