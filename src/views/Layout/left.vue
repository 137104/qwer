<template>
<div>
    <h3 class="logo">小U商城后台</h3>
    <el-menu
     class="page-menu"
     background-color="black"
     text-color="#fff"
     router 
     :default-active="$route.path"
     :collapse="iscollapse"   
    >
        <el-menu-item index="/admin"><i class="el-icon-house"></i><span slot="title">后台首页</span></el-menu-item>
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-setting"></i><span slot="title">系统设置</span></template>
            <el-menu-item index="/admin/menu">菜单管理</el-menu-item>
            <el-menu-item index="/admin/role">角色管理</el-menu-item>
            <el-menu-item index="/admin/user">管理员管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title"><i class="el-icon-s-shop"></i><span slot="title">商城管理</span></template>
            <el-menu-item index="/admin/category">分类管理</el-menu-item>
            <el-menu-item index="/admin/goods">商品管理</el-menu-item>
            <el-menu-item index="/admin/specs">商品属性管理</el-menu-item>
            <el-menu-item index="/admin/member">会员管理</el-menu-item>
            <el-menu-item index="/admin/seckill">秒杀管理</el-menu-item>
            <el-menu-item index="/admin/banner">轮播图管理</el-menu-item>
        </el-submenu>
        
    </el-menu>
</div>
</template>

<script>
import {mapState} from "vuex"
export default {
 data(){
    return{}
 },
 computed: {
     ...mapState(['iscollapse'])
 },
 methods:{},
 components:{}
}

</script>
<style scoped>
.logo{
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: rgb(238, 150, 150);
    white-space: nowrap;
    overflow: hidden;

}
.page-menu{
    border-right: none;
}
</style>