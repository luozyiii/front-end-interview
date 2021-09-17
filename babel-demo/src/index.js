// import '@babel/polyfill' // 全部引入

const sum = (a, b) => a + b

// 新的API
Promise.resolve(100).then(data => data);

// 新的API
[10, 20, 30].includes(20)

// ES6 generator 函数, 被 async/await 代替
function* tell() {
    console.log('执行a处理')
    yield 'a';

    console.log('执行b处理')
    yield 'b';

    console.log('执行c处理')
    yield 'c';
}

let k = tell()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())