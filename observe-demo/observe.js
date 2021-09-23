// 触发更新视图
function updateView() {
  console.log('视图更新')
}

// 重新定义数组原型；并没有污染全局 Array 原型
const oldArrayProperty = Array.prototype
// 创建新对象，原型指向 oldArrayProperty，再拓展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
  arrProto[methodName] = function() {
    updateView() // 触发视图更新
    oldArrayProperty[methodName].call(this, ...arguments)
  }
})

// 重新定义属性，监听起来
function defineReactive(target, key, value) {
  // 深度监听
  observe(value)

  // 核心 API
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue){
      if(newValue !== value) {
        // 深度监听
        observe(newValue)
        // 设置新值
        // 注意，value 一直在闭包中，此处设置完之后，再get 也是新值
        value = newValue

        // 触发更新视图
        updateView()
      }
    }
  })
}

// 监听对象属性
function observe(target) {
  if(typeof target !== 'object' || target === null) {
    // 不是对象或数组
    return target
  }

  if(Array.isArray(target)) {
    target.__proto__ = arrProto
  }
  // 重新定义各个属性 (for in 遍历)
  for (const key in target) {
    defineReactive(target, key, target[key])
  }
}

// 准备数据
const data = {
  name: 'leslie',
  age: 18,
  info: {
    address: '北京' // 需要深度监听
  },
  num: [10, 20, 30]
}

// 监听数据
observe(data)

// 测试
// data.name = 'lisi'
// data.age = 21
// // data.age = {num: 22}
// // data.age.num = 23
// data.x = '100' // 新增属性，监听不到 -- 所以有 Vue.set
// delete data.name // 删除属性，监听不到 -- 所以有 Vue.delete
// data.info.address = '上海' // 深度监听
data.num.push(4)
