// 实现以下效果
const obj1 = {a: 10, b: {x: 1, y: 2}}
const obj2 = {a: 10, b: {x: 1, y: 2}}
// isEqual(obj1, obj2) === true

// 判断是否是对象或数组
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function isEqual(obj1, obj2) {
  if(!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  if(obj1 === obj2) {
    return true
  }
  // 两个都是对象或数组，而且不相等
  // 1. 先取出obj1 obj2的key，比较个数
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if(obj1Keys.length !== obj2Keys.length) {
    return false
  }
  // 2. 以obj1为基准， 和obj2 递归比较
  for(let key in obj1) {
    // 比较当前key 的val -- 递归！！！
    const res = isEqual(obj1[key], obj2[key])
    if(!res) {
      return false
    }
  }

  // 3. 全相等
  return true
}
console.log(isEqual(obj1, obj2))