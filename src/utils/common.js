// 公用方法和变量封装
const commonFunc = {
  // 全局统一控制打印log日志--部署版本前请务必注释打印代码
  myConsole (logObj) {
    console.log(logObj)
  },
  // 全局统一 debugger --部署版本前请务必注释该行
  myDebugger () {
    // debugger
  },
  // 判断是否定义或存在
  isDefine (para) {
    let paraType = typeof para
    if (para === 'undefined' || para === 'null' || para === '' || para === '[]' || para === null || para === undefined) {
      return false
    } else if (paraType === 'number' || paraType === 'object' || paraType === 'string' || paraType === 'function' || paraType === 'boolean') {
      return true
    } else {
      for (var o in para) {
        return true
      }
      return false
    }
  },
  // 获取对象是否是指定的对象 使用：commonFunc.Type.isArray(value)
  Type: (function () {
    var type = {}
    var typeArr = [
      'String',
      'Object',
      'Number',
      'Array',
      'Undefined',
      'Function',
      'Null',
      'Symbol'
    ]
    for (var i = 0; i < typeArr.length; i++) {
      (function (name) {
        type['is' + name] = function (obj) {
          return Object.prototype.toString.call(obj) === '[object ' + name + ']'
        }
      })(typeArr[i])
    }
    return type
  })(),
  // 获取元素是否存在或数组中的定位
  getArrayIndexByValue (val, ArrayObj) {
    for (var i = 0; i < ArrayObj.length; i++) {
      if (JSON.stringify(ArrayObj[i]) === JSON.stringify(val)) {
        return i
      }
    }
    return -1
  },
  // 根据元素值在数组中删除某个元素
  arrayRemoveByValue (val, ArrayObj) {
    var index = this.getArrayIndexByValue(val, ArrayObj)
    if (index > -1) {
      ArrayObj.splice(index, 1)
    }
    return ArrayObj
  },
  // 解决 js 加-减-乘-除-四则运算精度问题
  // 除 (2.11/100)
  amcDiv (arg1, arg2) {
    let t1 = 0
    let t2 = 0
    let r1, r2
    try {
      t1 = arg1.toString().split('.')[1].length
    } catch (e) {}
    try {
      t2 = arg2.toString().split('.')[1].length
    } catch (e) {}
    r1 = Number(arg1.toString().replace('.', ''))
    r2 = Number(arg2.toString().replace('.', ''))
    return (r1 / r2) * Math.pow(10, t2 - t1)
  },
  // 乘 (1.11*100)
  amcMul (arg1, arg2) {
    let m = 0
    let s1 = arg1.toString()
    let s2 = arg2.toString()
    try {
      m += s1.split('.')[1].length
    } catch (e) {}
    try {
      m += s2.split('.')[1].length
    } catch (e) {}
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
  },
  // 加 (1.11+1)
  amcAdd (arg1, arg2) {
    let r1, r2, m
    try {
      r1 = arg1.toString().split('.')[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split('.')[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  },
  // 减 (1.11-1)
  amcSub (arg1, arg2) {
    let r1, r2, m, n
    try {
      r1 = arg1.toString().split('.')[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split('.')[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    // last modify by deeka
    // 动态控制精度长度
    n = (r1 >= r2) ? r1 : r2
    return ((arg1 * m - arg2 * m) / m).toFixed(n)
  }
}

export default commonFunc
