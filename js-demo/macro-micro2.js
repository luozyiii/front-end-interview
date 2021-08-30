const $p1 = $('<p>段落</p>')
const $p2 = $('<p>段落</p>')
const $p3 = $('<p>段落</p>')
$('#con').append($p1).append($p2).append($p3)
console.log('length', $('#con').children().length) // 3
alert('本次call stack 结束，DOM结构已更新，但尚未触发渲染') // alert 会阻断js执行，阻断DOM渲染，便于查看效果

// 微任务：DOM渲染前
Promise.resolve().then(()=> {
  console.log('length1', $('#con').children().length) // 3
  alert('Promise then') // DOM渲染了吗？-- no
})

// 宏任务：DOM渲染后
setTimeout(()=> {
  console.log('length2', $('#con').children().length) // 3
  alert('setTimeout') // DOM渲染了吗？-- yes
})