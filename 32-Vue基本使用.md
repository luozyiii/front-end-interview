# Vue 基本使用
- 日常使用，必须使用，面试必考(不一定全考)
- 梳理知识点，从冗长的文档中摘出考点和重点

## 指令、插值
> vue-demo/components/BaseUse/TplDemo.vue

- 插值、表达式
- 指令、动态属性
- v-html：会有XSS风险，会覆盖子组件

## computed和watch
> vue-demo/components/BaseUse/ComputedDemo.vue; vue-demo/components/BaseUse/WatchDemo.vue

- computed 有缓存，data不变则不会重新计算
- watch 如何深度监听？（默认浅监听）
- watch 监听引用类型，拿不到oldVal

## class 和 style
> vue-demo/components/BaseUse/ClassDemo.vue

- 使用动态属性
- 使用驼峰式写法

## 条件渲染
> vue-demo/components/BaseUse/ConditionDemo.vue

- v-if-else 的用法，可使用变量，也可以使用 === 表达式
- v-if 和 v-show 的区别？
- v-if 和 v-show 的使用场景？
v-if : 一次使用， v-show : 频繁切换的场景

## 循环（列表）渲染
> vue-demo/components/BaseUse/ListDemo.vue

- 如何遍历对象？ -- 也可以用 v-for
- key 的重要性。key不能乱写（如random或者index）
- v-for 和 v-if 不能一起使用

## 事件
> vue-demo/components/BaseUse/EventDemo.vue

- event 参数，自定义参数
- 事件修饰符，按键修饰符
- 【观察】事件被绑定到哪里？

### 重点
- event 是原生的
- 事件被挂载到当前元素

### 事件修饰符
```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThis"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件监听器时使用时间捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThis">...</div>
```

### 按键修饰符
```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onClick">A</button>

<!-- 没有任何系统修饰符被按下的时候触发 -->
<button @click.exact="onClick">A</button>
```

## 表单
> vue-demo/components/BaseUse/FormDemo.vue

- v-modal
- 常见表单项textarea checkbox radio select
- 修饰符 lazy number trim











