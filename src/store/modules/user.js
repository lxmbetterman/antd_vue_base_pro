//和用户登陆登出有关的store

import Vue from 'vue'
import {axios} from "../../axios/request" //axios 实例
//import {getInfo, login, logout} from "@/api/login"
//import {ACCESS_TOKEN} from "@/store/mutation-types"
//import {welcome} from "@/utils/util"

const user = {
    state: {
        token: '',
        name: '',
        //welcome: '',
        avatar: '',
        roles: [],
        info: {}
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        /*SET_NAME: (state, {name, welcome}) => {
            state.name = name
            state.welcome = welcome
        },*/
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_INFO: (state, info) => {
            state.info = info
        },
    },

    actions: {
        // 登录  作用：获取保存token相关设置
        Login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                axios({
                    url: '/login/login',
                    method: 'post',
                    data: {...userInfo}
                }).then(function (response) {
                    Vue.ls.set("ACCESS_TOKEN", response.token, 7 * 24 * 60 * 60 * 1000)
                    commit('SET_TOKEN', response.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetInfo({commit}) {
            return new Promise((resolve, reject) => {
                axios({
                    url: "/login/userInfo",
                    method: "post"

                }).then((response) => {
                    console.log(response, "sss")
                    if (response.roles && response.roles.length > 0) {
                        commit('SET_ROLES', response.roles)
                    } else {
                        reject('getInfo: roles must be a non-null array !')
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })

            })
        },

        // 登出 清除token 重置roles,在路由跳转的时候自然会滚回到登陆页
        Logout({commit, state}) {
            return new Promise((resolve) => {
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                Vue.ls.remove("ACCESS_TOKEN")

                axios({
                    url: '/login/logout',
                    method: 'post'
                }).then((res) => {
                    console.log(res,"LOGOUT")
                    resolve()
                }).catch(() => {
                    resolve()
                })
            })
        },

    }
}

export default user
