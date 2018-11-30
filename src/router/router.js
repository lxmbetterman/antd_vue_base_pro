import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "../layout/index"

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { title: '表单页', icon: 'form' },
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { title: '表单页', icon: 'form' },
    },

    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        name: "首页",
        meta: { title: '表单页', icon: 'form' },
        children: [
            {
                path: 'dashboard',
                component: () => import('../views/Home'),
                name: 'Dashboard',
                meta: {title: 'dashboard', icon: 'dashboard', noCache: true}
            }
        ]
    },
    {
        path: '/a',
        component: Layout,
        redirect: '/a/index',
        name: "首页2",
        meta: { title: '表单页', icon: 'form' },
        children: [
            {
                path: 'index',
                component: () => import('../views/Home'),
                name: 'a',
                meta: {title: 'a', icon: 'dashboard', noCache: true}
            }
        ]
    },
    {
        path: '/aa',
        component: Layout,
        redirect: '/a/index2',
        meta: { title: '权限测试constant', icon: 'form' },
        children: [
            {
                path: 'index2',
                component: () => import('../views/Home'),
                name: 'a',
                meta: {title: 'a-admin', icon: 'dashboard', noCache: true,roles: ['admin']}
            },
            {
                path: 'index3',
                component: () => import('../views/Home'),
                name: 'aa',
                meta: {title: 'aa-editor', icon: 'dashboard', noCache: true,roles: ['editor']}
            }
        ]
    },
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
        path: '/test',
        component: Layout,
        redirect: '/test/home',
        meta: { title: '权限测试', icon: 'form' },
        children: [
            {
                path: '/test/home',
                component: () => import('../views/Home'),
                name: 'home-admin',
                meta: {title: 'home-admin', icon: 'home', noCache: true, roles: ['admin']}
            },
            {
                path: '/test/about',
                component: () => import('../views/About'),
                name: 'about',
                meta: {title: 'about-editor', icon: 'about', noCache: true, roles: ['editor']}
            }
        ]
    }
]


