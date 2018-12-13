import Vue from 'vue'
import Storage from 'vue-ls'
import config from "../defaultConfig"

import {Button, Drawer, Icon, Layout, Menu,Input,Form,Checkbox} from 'ant-design-vue';


import App from './App.vue'
import router from './router/router'
import store from './store'
import "./permission"
import {VueAxios} from "./axios/request"

Vue.use(Button)
Vue.use(Layout)
Vue.use(Drawer)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Input)
Vue.use(Form)
Vue.use(Checkbox)

Vue.config.productionTip = false

Vue.use(Storage, config.storageOptions)
Vue.use(VueAxios, router) //整体使用就行

import './mock' // 引入模拟数据接口





new Vue({
    router,
    store,
    mounted() {
        store.commit('TOGGLE_SIDEBAR_STATUS', Vue.ls.get("SIDEBAR_STATUS", false)) //参数二为默认值
        /*store.commit('TOGGLE_THEME', Vue.ls.get(DEFAULT_THEME, config.navTheme))
        store.commit('TOGGLE_WEAK', Vue.ls.get(DEFAULT_COLOR_WEAK, config.colorWeak))
        store.commit('TOGGLE_COLOR', Vue.ls.get(DEFAULT_COLOR, config.primaryColor))
        store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))*/
    },
    render: h => h(App)
}).$mount('#app')
