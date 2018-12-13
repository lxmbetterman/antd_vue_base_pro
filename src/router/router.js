import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/login"
import Layout from "../layout/index"

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {title: '登陆页', icon: 'form'},
        hidden: true
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {title: '表单页', icon: 'form'},
        hidden: true
    },

    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        name: "首页",
        meta: {title: '仪表盘', icon: 'form'},
        children: [
            {
                path: 'dashboard',
                component: () => import('../views/Home'),
                name: 'Dashboard',
                meta: {title: 'dashboard', icon: 'dashboard', noCache: true}
            }
        ]
    }
]

/**
 * 初始化路由对象
 * */
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRouterMap
})

export const asyncRouterMap = [
    {
        path: 'test',
        component: Layout,
        name: "test",
        redirect: '/test/testA',
        meta: {title: 'test测试页面', icon: 'question'},
        children: [
            {
                path: '/test/testA',
                component: () => import('../views/test/testA'),
                name: 'testA',
                meta: {title: '测试页面A', icon: 'question', noCache: true, roles: ['admin']}  //'admin',
            },
            {
                path: '/test/testB',
                component: () => import('../views/test/testB'),
                name: 'testB',
                meta: {
                    title: '测试页面B', icon: 'question', noCache: true, roles: ['editor']
                }
            }
        ]
    }
]


