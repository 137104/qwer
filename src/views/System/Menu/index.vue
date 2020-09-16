<template>
 <div class="">
     <el-button type="primary" @click="add">添加菜单</el-button>
     <v-list></v-list>
     <v-info :info="info"></v-info>
 </div>
</template>
<script>
import VList from "./vlist"
import VInfo from "./vinfo"
export default {
 data(){
 return{
     info:{
         isAdd:false,
         isShow:false
     }
 }
 },
 created(){},
 methods:{
     add(){
         this.info.isAdd = this.info.isShow= true;

     }
 },
 components:{
     VList,VInfo,
 }
}

</script>
<style scoped>
</style>