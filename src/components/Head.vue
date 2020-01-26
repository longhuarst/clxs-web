<template>



<div id="app" style="background:#fff">
    <p> 标题 </p>
    {{xtitile}}



    <div v-if='!global_logined'> <a v-on:click="global_register = true" href="/register">注册</a>/<a v-on:click='global_login=true' href="/login">登陆</a></div>
    <!-- <div v-if='global_logined'> {{global_user.username}}</div> -->
   
        {{global_register}}
        <!-- {{}} -->
        {{global_user.username}}


        <button v-on:click='global_register = true'>22</button>
</div>

</template>



<script>

// import global from './common.vue' //导入全局组件

var titile = "标题"


export default {

    data(){
        return{
            global_register:this.common.register,
            global_login:this.common.login,
            global_logined:this.common.logined,
            xtitile:titile,
            global_user:this.common.user,
        }
        
    }
    
    
}
</script>



<style scoped>






</style>



