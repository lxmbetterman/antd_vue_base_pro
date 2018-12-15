//通用方法插件，插件是一个对象MyPlugin{}，必须有一个install方法，通过全局方法 Vue.use() 使用插件
//会自动 调用 `MyPlugin.install(Vue,option)`
//只能通过Vue.prototype添加全局属性或方法

let myMethods = {}
myMethods.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.prototype.myConsole = function (obj) {
        // 逻辑...
        console.log(obj)
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVnode) {
            // 逻辑...
        }
    })

    // 3. 注入组件
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
    })
}
export default myMethods

