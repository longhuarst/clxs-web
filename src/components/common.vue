


<script>
// 公共组件

function commonFun(){
    window.console.log('公共方法')
    window.console.log(register)
}


const register = false;
const login = false;
const logined = false;
const username = "未登录"



export default {
    commonFun,
    register,
    login,
    logined,
    user:{
        username:username,
    },
    

}
</script>