const compiler = require('vue-template-compiler')

// 插值
// const template = `<p>{{message}}</p>`
// with(this){return _c('p',[_v(_s(message))])}
// h 函数 -> vnode
// _c createElement -> vnode

// 表达式
// const template = `<p>{{ flag ? message : 'no message found' }}</p>`
// with(this){return _c('p',[_v(_s(flag ? message : 'no message found'))])}

// 属性和动态属性
// const template = `
// <div id="div1" class="container">
//     <img :src="imgUrl" />
// </div>
// `
// with(this){return _c('div',{staticClass:"container",attrs:{"id":"div1"}},[_c('img',{attrs:{"src":imgUrl}})])}

// 条件
// const template = `
// <div>
//     <p v-if="flag === 'a'">A</p>
//     <p v-else>B</p>
// </div>
// `
// with(this){return _c('div',[(flag === 'a')?_c('p',[_v("A")]):_c('p',[_v("B")])])}

// 循环
// const template = `
// <ul>
//     <li v-for="item in list" :key="item.id">{{ item.title }}</li>
// </ul>
// `
// with(this){return _c('ul',_l((list),function(item){return _c('li',{key:item.id},[_v(_s(item.title))])}),0)}

// 事件
// const template = `
// <button @click="clickHandler">submit</button>
// `
// with(this){return _c('button',{on:{"click":clickHandler}},[_v("submit")])}

// v-model
const template = `<input type="text" v-model="name"/>`
// 主要看input 事件
// with(this){return _c('input',{directives:[{name:"model",rawName:"v-model",value:(name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(name)},on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}}})}

// 编译
const res = compiler.compile(template)
console.log(res.render)