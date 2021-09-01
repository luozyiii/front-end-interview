import { fn } from './a' // 解构赋值
fn()
import { fnb } from './b'
fnb()

import objc from './c'
console.log(objc)

console.log('this is index.js')

const sum = (a, b) => {
  return a + b
}
const res = sum(10, 20)
console.log(res)