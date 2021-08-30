function fn1() {
    console.log(this)
}
fn1() // window

fn1.call({x: 100}) // {x: 100}

const fn2 = fn1.bind({x:200})
fn2() // {x: 200}

const zhangsan = {
    name: '张三',
    sayHi() {
        // this 即当前对象
        console.log(this)
    },
    wait() {
        setTimeout(function(){
            // this === window
            console.log(this)
        });
    },
    waitAgain() {
        setTimeout(() => {
            // this 即当前对象
            console.log(this)
        }, 0);
    }
}

class Peple {
    constructor(name) {
        this.name = name
        this.age = 20
    }
    sayHi() {
        console.log(this)
    }
}
const zhangsan2 = new Peple('张三2')
zhangsan2.sayHi() // zhangsan2 对象