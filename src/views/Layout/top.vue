<template>
  <div class="header">
      <div class="lt">
        <el-button v-if="iscollapse" type="primary" @click="TOGGLE" size="small" class="toggle-btn" icon="el-icon-s-fold"></el-button>
          <el-button v-else type="primary" size="small" @click="TOGGLE" class="toggle-btn" icon="el-icon-s-fold"></el-button>
                       
             <el-breadcrumb separator="/" class="mbx">
             <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
             <el-breadcrumb-item><a href="/">{{$route.meta.title}}</a></el-breadcrumb-item>              
</el-breadcrumb>
<el-button size="small" v-if="$router.path!='/index'" @click="$router.back()" icon="el-icon-back" circle></el-button>
      </div>
      <div>
          
         <el-dropdown> 
  <span class="el-dropdown-link">
    您好！<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>1</el-dropdown-item>
    <el-dropdown-item>2</el-dropdown-item>
    <el-dropdown-item ><i class="el-icon-full-screen"></i>全屏操作</el-dropdown-item>
    <el-dropdown-item divided><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown> 
      </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
 data(){
 return{}
 },
 computed:{
   ...mapState(['iscollapse'])
 },
 methods:{
   ...mapMutations(['TOGGLE'])
 },
 components:{}
}

</script>
<style scoped>
.header{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header .lt{
    display: flex;
    align-items: center;
}
.header .mbx{
   margin: 0 20px;
}

</style>