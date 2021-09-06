# React 真题

##### 组件之间如何通信？
- 父子组件 props
- 自定义事件
- Redux 和 Context

##### JSX本质是什么
- createElement
- 执行返回vnode

##### Context 是什么，如何应用
- 父组件，向其下所有子孙组件传递信息
- 如一些简单的公共信息：主题色、语言等
- 复杂的公共信息，请用redux

##### shouldComponentUpdate 用途
- 性能优化
- 配合 “不可变值”一起使用，否则可能出错

##### redux 单向数据流
![redux数据流图](./assets/images/redux数据流图.png)

##### setState场景题

##### 什么是纯函数
- 返回一个新值，没有副作用（不会偷偷修改其他值）
- 重点：不可变值
- 如： arr1 = arr.slice()

##### React 组件生命周期
- 单组件生命周期
- 父子组件生命周期
- 注意SCU

##### React 发起ajax应该在哪个生命周期
- componentDidMount

##### 渲染列表，为何使用key
- 必须要用key，且不能是index和random
- diff 算法中通过 tag 和 key 来判断，是否是sameNode
- 减少渲染次数，提升渲染性能