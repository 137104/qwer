<template>
 <div>
 <el-row class="login-bg">
     <el-col :span="8" class="login-box">
             <h3>小U商城管理系统</h3>
         <el-form :model="forminfo" ref="form" >
             <el-form-item>
                 <el-input v-model="forminfo.username" placeholder="请输入账号">
                     <template slot="prepend">
                         <i class="el-icon-user"></i>
                     </template>
                 </el-input>               
             </el-form-item>
              <el-form-item>
                 <el-input v-model="forminfo.password" show-password placeholder="请输入密码">
                     <template slot="prepend">
                         <i class="el-icon-lock"></i>
                     </template>
                 </el-input>
             </el-form-item>
             <el-form-item>
                 <el-button class="login-btn" type="primary" @click="login">立即登录</el-button>
             </el-form-item>
         </el-form>
      </el-col>
    </el-row>
     
 </div>
</template>

<script>
export default {
 data(){
 return{
     forminfo:{
         username:"",
         password:"",
     }
 }
 },
 created(){},
 methods:{
     login(){
         
     }
 },
 components:{}
}

</script>
<style scoped>
.login-bg{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(81, 172, 172);   
}
.login-box{
    background-color: rgb(182, 212, 136);
    box-shadow: 0 0 4px rgb(216, 23, 103);
    padding: 30px 40px;
    border-radius: 5px;
    border: 1px solid #eee;
}
.login-box h3{
    line-height: 40px;
    text-align: center;
    margin-bottom: 20px;
}
.login-btn{
    display: block;
    width: 100%;
}
</style> 