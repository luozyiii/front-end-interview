const arr = [10,20,30]
const popRes = arr.pop() // 返回删除的数 30
console.log(popRes,arr)

const pushRes = arr.push(50) // 返回length
console.log(pushRes, arr)

const unshiftRes = arr.unshift(1) // 返回length
console.log(unshiftRes,arr)

const shiftRes = arr.shift() // 返回删除的数 1
console.log(shiftRes, arr)

// 都改变了源数组

// 纯函数：1. 不改变源数组(副作用)；2. 返回一个数组
const arr2 = [1,2,3]

// contact
const arr3 = arr2.concat([4,5])
console.log(arr3)
// map
const arr4 = arr2.map(item => item * 10)
console.log(arr4)
// filter
const arr5 = arr2.filter(item => item > 1)
console.log(arr5)
// slice 类似深拷贝
const arr6 = arr2.slice()
console.log(arr6)

// 非纯函数：pop push unshift shift 
// forEach
// some every
// reduce


const arr10 = [10,11,12,13,14]
// slice 纯函数
const arr11 = arr10.slice()
const arr12 = arr10.slice(1,4)
const arr13 = arr10.slice(2)
const arr14 = arr10.slice(-2)
console.log(arr11,arr12,arr13,arr14)

// splice 非纯函数
const spliceRes = arr10.splice(1,2,'a','b','c')
console.log(spliceRes,arr10)

