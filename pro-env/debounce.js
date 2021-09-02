const input1 = document.getElementById('input1')

let timer = null
input1.addEventListener('keyup', function() {
    if(timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        // 模拟触发change事件
        console.log(input1.value)

        // 清空定时器
        timer = null 
    },500);
    
})


// 封装
function debounce(fn, delay = 500) {
    let timer = null
    return function() {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay);
    }
}

const input2 = document.getElementById('input2')
input2.addEventListener('keyup', debounce(function (){
    console.log(input2.value)
}),600)