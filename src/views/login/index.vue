<template>
    <div class="login-container">
        <div class="login-card">
            <div class="login-left">
                <el-image :src="require('@/assets/img/login.png')"></el-image>
            </div>
            <div class="login-right">
                <div class="login-main">
                    <h1>登录</h1>
                    <h3>请使用账号密码登录</h3>
                    <el-form :model="login">
                        <el-form-item prop="username">
                            <el-input v-model="login.username" placeholder="请输入账号"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" v-model="login.password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item prop="code">
                            <el-row :gutter="8">
                                <el-col :span="8">
                                    <el-image :src="codeImage" style="height:40px"></el-image>
                                </el-col>
                                <el-col :span="16">
                                    <el-input v-model="login.code" placeholder="请输入验证码"></el-input>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="width:100%;" @click="submit">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            time:'',
            login:{
                username:'szhibin',
                password:'111222',
                code:''
            },
            codeImage:''
        }
    },
    methods:{
        getCode(){

        },
        submit(){

        }
    }
}
</script>

<style lang="scss">
.login-container{
    display: flex;
    align-items:center;
    background-color: #5d94f8;
    width:100%;
    height:100%;
}
.login-card{
    margin:0 auto;
    width:80%;
    display: flex;
    justify-content: space-between;
}
.login-left{ 
    display: flex;
    width:66%;
    border-radius: 25px;
    align-items:center;
    img{
        border-radius: 25px;
    }
}
.login-right{
    display: flex;
    flex-direction: column;
    width:30%;
    background-color: white;
    border-radius: 25px;
    h1{
        margin:10px auto;
        color:#4b62ea
    }
    h3{
        color:#9289a6
    }
}
.login-main{
    padding: 20px;
}

// <=768的设备
@media screen and (max-width: 767px){
    .login-left{
        display: none;
    }
    .login-right{
        width:100%;
    }
    .login-card{
        width: auto;
    }
}
// 1128左右会挤压变形
@media screen and (max-width: 1128px){
    .login-right{
        .login-main{
            padding:20px 20px 0;
        }
        h3{
            display: none;
        }
    }
}


</style>