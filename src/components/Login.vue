<template>
<div class = "login_container">
    <div class="login_box">

        <!-- 头像 -->
        <div class="avater_box"> 
            <img src="../assets/logo.png" alt="">
        </div>

        <!-- 表单 -->
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">

            <!-- 用户名 -->
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
            </el-form-item>

            <!-- 密码 -->
            <el-form-item label="" prop="password">
                <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
            </el-form-item>


            <!-- 登录按钮 -->
            <el-form-item class="btns">
                <el-button type="primary" @click="login()">登陆</el-button>
                <el-button type="info" @click="resetLoginForm()">重置</el-button>
            </el-form-item>

        </el-form>


  

    
    </div>
</div>
</template>



<script>
export default {

    data() {
        return {
            //这是登录表单 数据绑定对象
            loginForm:{
                username:'',
                password:'',
            },
            //这是表单的验证规则对象
            loginFormRules:{
                //用户名
                username:[
                    {required: true, message: "请输入登录名", trigger: "blur"},
                    {min: 3, max: 10, message: "长度在3～10之间", trigger: "blur"}
                ],
                //密码
                password:[
                    {required: true, message: "请输入密码", trigger: "blur"},
                    {min: 6, max: 15, message: "长度在6～15之间", trigger: "blur"}
                ],
            }
        }
    },

    methods:{
        //点击重置按钮，重置登陆表单 
        resetLoginForm(){
            window.console.log('重置')
            this.$refs.loginFormRef.resetFields();
        },
        login(){
            //登陆前预验证

            this.$refs.loginFormRef.validate(async valid => {
                window.console.log(valid)
                
                if (!valid) return;

                //发起登陆请求
                try{
                    const {data: res} = await this.$http.post('login', this.loginForm);
                    window.console.log(res)

                    if (res.meta.status != 200){
                        return this.$message.error('登陆失败！')
                    }else{
                        this.$message.success('登陆成功！')
                        
                        window.sessionStorage.setItem("token", res.data.token)

                        this.$router.push('/dashboard')

                        




                        

                    }
                }catch(err){
                    window.console.log(err)
                    //alert(err)
                    this.$message.error('登陆失败！' + err)
                }
                

               

            })
        }
    }
    
}
</script>



<style lang="less" scoped>
//scoped 表示仅在当前组件生效

.login_container{
    background-color: #2b4b6b;
    height: 100%;
    
}

.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avater_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee; //加边框
        border-radius: 50%;//边框变圆
        padding: 10px;//图像与边框留间隙
        box-shadow: 0 0 10px #ddd; //边框阴影 向外扩散10px
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color:#fff; 
        img {
            
            width: 100%;
            height: 100%;
            border-radius: 50%;//图像变圆
            background-color: #eee;
        };
    }
};


.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
};

.btns{
    display:  flex;
    justify-content: flex-end;
}

</style>