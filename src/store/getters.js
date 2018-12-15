const getters = {
    //module_permission
    permission_routers: state => state.permission.routers,  //过滤后的所有路由  constantRouterMap+asyncRouterMap
    addRouters: state => state.permission.addRouters,


    // module_user
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    nickname: state => state.user.name,
    welcome: state => state.user.welcome,
    roles: state => state.user.roles,
    userInfo: state => state.user.info,
}
export default getters
