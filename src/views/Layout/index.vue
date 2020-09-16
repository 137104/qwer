<template>
<el-container class="page">
   <el-aside :width="iscollapse ? '64px':'200px'" class="page-nav">
     <left/>
    </el-aside>
    <el-container class="page-content">
        <el-header height="" class="page-header"> 
      <top/>
        </el-header>
        <el-main height="" class="page-main">
            <router-view/>
        </el-main>
    </el-container>
</el-container>

</template>

<script>
import left from"./left"
import top from"./top"
import {mapState} from "vuex"
export default {
 data(){
 return{}
 },
 computed:{
     ...mapState(['iscollapse'])
 },
 methods:{},
 components:{
     left,top,
 }
}

</script>
<style scoped>
.page{
    width: 100vw;
    height: 100vh;
}

.page-content{
    height: 100%;
    background-color: rgb(207, 241, 250);
    color: rgb(13, 43, 10);
}
.page-nav{
    height: 100%;
    background-color: rgb(0, 0, 0);
    color: #fff;
}
.page-header{
   background-color: #fff;
   height: 50px;
   box-shadow: 0 0 4px rgb(0, 0, 0);
}

</style>