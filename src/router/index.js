import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

let router = new Router({
    routes: [{
            path: '/',
            component: () =>
                import ("@/views/Login"),
            meta: { title: "登录" }
        },
        {
            path: '/admin',
            component: () =>
                import ("@/views/Layout"),
            meta: { title: "后台管理系统" },
            redirect: "/admin/index",
            children: [{
                    path: '/admin/index',
                    component: () =>
                        import ("@/views/Index"),
                    meta: { title: "后台首页" }
                },
                {
                    path: '/admin/menu',
                    component: () =>
                        import ("@/views/System/menu"),
                    meta: { title: "菜单管理" }
                },
                {
                    path: '/admin/role',
                    component: () =>
                        import ("@/views/System/role"),
                    meta: { title: "角色管理" }
                },
                {
                    path: '/admin/user',
                    component: () =>
                        import ("@/views/System/user"),
                    meta: { title: "管理员管理" }
                },
                {
                    path: '/admin/banner',
                    component: () =>
                        import ("@/views/Shop/banner"),
                    meta: { title: "轮播图管理" }
                },
                {
                    path: '/admin/category',
                    component: () =>
                        import ("@/views/Shop/category"),
                    meta: { title: "分类管理" }
                },
                {
                    path: '/admin/goods',
                    component: () =>
                        import ("@/views/Shop/goods"),
                    meta: { title: "商品管理" }
                },
                {
                    path: '/admin/member',
                    component: () =>
                        import ("@/views/Shop/member"),
                    meta: { title: "会员管理" }
                },
                {
                    path: '/admin/seckill',
                    component: () =>
                        import ("@/views/Shop/seckill"),
                    meta: { title: "秒杀管理" }
                },
                {
                    path: '/admin/specs',
                    component: () =>
                        import ("@/views/Shop/specs"),
                    meta: { title: "商品属性管理" }
                },
            ]
        },


    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next();

})
export default router;