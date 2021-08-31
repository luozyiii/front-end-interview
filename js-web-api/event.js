// 通用的绑定函数
function bindEvent(elem, type, selector, fn) {
    if(fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if(selector) {
            // 代理绑定
            if(target.matches(selector)){
                fn.call(target, event)
            }
        }else {
            // 普通绑定
            fn.call(target, event)
        }
    })
}
const a = document.getElementById('btn1')
bindEvent(a, 'click', function(e) {
    e.preventDefault() // 阻止默认行为
    alert('clicked')
})

// 事件冒泡
const p1 = document.getElementById('p1')
const body = document.body

// 普通绑定
bindEvent(p1, 'click', function(e) {
    console.log(e.target) // 获取触发的元素
    e.stopPropagation() // 注释掉这一行，来阻止事件冒泡
    alert('激活')
})
bindEvent(body, 'click', e => {
    alert('取消')
})

// 事件代理绑定
const div3 = document.getElementById('div3')
div3.addEventListener('click', function(e) {
    e.preventDefault()
    e.stopPropagation()
    const target = e.target
    if(target.nodeName === 'A') {
        alert(target.innerHTML)
    }
})