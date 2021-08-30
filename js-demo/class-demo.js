class Student {
    constructor(name, number) {
        this.name = name
        this.number = number
    }
    sayHi() {
        console.log(`姓名：${this.name}，学号：${this.number}`)
    }
}

// 通过类声明对象/实例
const xialuo = new Student('夏洛',100)
console.log(xialuo.name)
console.log(xialuo.number)
console.log(xialuo.sayHi())