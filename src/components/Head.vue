<template>



<div id="app" style="background:#fff">
    <p> 标题 </p>
    {{xtitile}}
</div>

</template>



<script>

import global from './common.vue' //导入全局组件

var titile = "标题"


export default {

    data(){
        return{
            global_register:global.register,
            global_login:global.login,
            global_logined:global.logined,
            xtitile:titile,
        }
        
    }
    
    
}
</script>



<style scoped>






</style>



