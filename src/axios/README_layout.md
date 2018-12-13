Vue.js 的插件应该有一个公开方法 install。写法结构固定。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () { // 逻辑... 
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) { // 逻辑...
    }
    ...
  })

  // 3. 注入组件
  Vue.mixin({
    created: function () { // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) { // 逻辑...
  }
}

这是一个两层嵌套的vue 插件，可能有点绕，理解后无需死记硬背。
直接整体挪用就能使用！

使用方式：
1：import axios from aixos.js   //aioxs 此时是axios实例化对象
2：vue组件内用 this.axios 调用  //aioxs 此时是axios实例化对象