/**
 * 用于处理过滤权限路由，保存授权路由变量
 * 该文件可以整体被加入到其他项目中
 * */


import {asyncRouterMap, constantRouterMap} from '../../router/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles  用户账号的权限role[]
 * @param route
 * some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。方法会依次执行数组的每个元素：如果有一个元素满足条件，则表达式返回true ,
 * 剩余的元素不会再执行检测！！！如果没有满足条件的元素，则返回false。
 *
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) { //route.meta.roles是一个数组
        return roles.some(role => route.meta.roles.includes(role))// 循环用户权限数组，看是否存在于每条路由的权限配置里
    } else {
        return true //如果没有meta.roles的配置 则允许该条路由
    }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes[] asyncRouterMap：需要处理权限的路由配置表
 * @param roles[] 用户账号的权限数组，登录后返回
 */
function filterAsyncRouter(routes, roles) {
    const res = []

    routes.forEach(route => {
        const tmp = {...route} //实现route的赋值
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRouter(tmp.children, roles)
            }
            res.push(tmp)
        }
    })

    return res
}

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        }
    },
    actions: {
        GenerateRoutes({commit}, data) {
            return new Promise(resolve => {  //异步返回 ：思考返回一个promise对象的好处？可以在调用此方法的地方接回调函数
                const {roles} = data
                let accessedRouters
                if (roles.includes('admin')) {
                    accessedRouters = asyncRouterMap
                } else {
                    accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
                }
                commit('SET_ROUTERS', accessedRouters)
                resolve()
            })
        }
    }
}

export default permission
