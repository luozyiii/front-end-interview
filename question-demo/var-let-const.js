// 变量提升 ES5
console.log(a) // undefined
var a = 100

// console.log(b) // 报错
// let b = 20

// 函数表达式 vs 函数声明

// for
for(var i = 0; i< 10; i++) {
  var j = i + 1
}
console.log(i, j)

// for 块级作用域
for(let x = 0; x< 10; x++) {
  let y = x + 1
}
console.log(x, y)
