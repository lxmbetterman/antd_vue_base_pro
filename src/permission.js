//vue-router的路由钩子文件

import Vue from 'vue'
import router from './router/router'
import store from './store'
import notification from 'ant-design-vue/es/notification'
//import { Message } from 'element-ui'
//import NProgress from 'nprogress' // progress bar
//import 'nprogress/nprogress.css' // progress bar style

//NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission judge function
function hasPermission(roles, permissionRoles) {
    if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
    if (!permissionRoles) return true
    return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/auth-redirect']// no redirect whitelist

router.beforeEach((to, from, next) => {
    //NProgress.start() // start progress bar
    if (Vue.ls.get("ACCESS_TOKEN")) { // 登陆token标记
        /* has token*/
        if (to.path === '/login') {
            next({path: '/'})
            //NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
                store.dispatch('GetInfo').then(res => { // 拉取用户信息
                    const roles = res.roles // note: roles must be a array! such as: ['editor','develop']
                    store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
                        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                        next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                    })
                }).catch((err) => {
                    store.dispatch('Logout').then(() => {
                        //Message.error(err || 'Verification failed, please login again')
                        notification.error({ message: "请重新登陆" , description: err||"用户信息获取失败，返回登陆页" })
                        next({ path: '/' })
                    })
                })
            } else {//如果有token，且roles存在 ，直接next()
                next()
            }
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
            //NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }
})

router.afterEach(() => {
    //NProgress.done() // finish progress bar
})



