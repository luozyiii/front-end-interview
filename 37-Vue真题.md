# Vue 真题

##### v-show 和 v-if 的区别
- v-show 通过CSS display 控制显示和隐藏
- v-if 组件真正的渲染和销毁，而不是显示和隐藏
- 频繁切换显示状态用v-show，否则用v-if

##### 为何在 v-for 中使用 key
- 必须用key，且不能是index和random
- diff算法中通过 tag 和 key 来判断，是否是sameNode
- 减少渲染次数，提升渲染性能

##### 描述 Vue组件生命周期（父子组件）
- 单组件生命周期图
- 父子组件生命周期关系

##### Vue 组件如何通信（`重点`）
- 父子组件props 和 this.$emit
- 自定义事件 event.$on event.$off event.$emit
- vuex

##### 描述组件渲染和更新的过程
- 响应式
- 模板编译
- vdom diff

##### 双向数据绑定 v-model 的实现原理
- input 元素的 value = this.name
- 绑定 input 事件 this.name = $event.target.value
- data 更新触发 re-render

##### 对 MVVM 的理解

##### computed 有何特点
- 缓存，data不变不会重新计算
- 提高性能

##### 为何组件 data 必须是一个函数？

##### ajax 请求应该放在哪个生命周期
- mounted
- JS 是单线程的，ajax异步获取数据
- 放在mounted之前没有用，只会让逻辑更加混乱

##### 如何将组件所有props 传递给子组件?
- $props
- <User v-bind="$props" />
- 细节知识点，优先级不高

##### 如何自己实现 v-model
> components/AdvancedUse/CustomVModel.vue

##### 多个组件有相同的逻辑，如何抽离
- mixin
- 以及mixin 的一些缺点

##### 何时需要使用 keep-alive
- 缓存组件，不需要重复渲染
- 如多个静态tab页的切换
- 优化性能

##### 何时需要使用 beforeDestory
- 解绑自定义事件 event.$off
- 清除定时器
- 解绑自定义的DOM事件，如 window scroll 等

##### 什么是作用域插槽

##### Vuex 中action 和 mutation 有何区别
- action 中处理异步，mutation 不可以
- mutation 做原子操作
- action 可以整合多个 mutation

##### vue-router 常用的路由模式
- hash 默认
- H5 history(需要服务端支持)
- 两者比较

##### 如何配置vue-router 异步加载
- path
- import()

##### 请用vnode 描述一个DOM结构

##### 请描述响应式原理
- 监听 data 变化
- 组件渲染和更新的流程

##### diff 算法的时间复杂度
- O(n)
- 在 O(n^3)的基础上做了一些优化调整

##### 简述diff算法的过程
- patch(elem, vnode) 和 patch(vnode, newVnode)
- patchVnode 和 addVnodes 和 removeVnodes
- updateChildren （key 的重要性）

##### Vue 为何是异步渲染，$nextTick 有何用
- 异步渲染（以及合并data修改），以提高渲染性能
- $nextTick 在DOM更新完之后，触发回调

##### Vue 常见性能优化方式
- 合理使用v-show 和 v-if
- 合理使用 computed
- v-for 时加key, 以及避免和v-if同时使用
- 自定义事件、DOM事件及时销毁
- 合理使用异步组件
- data 层级不要太深
- 使用vue-loader 在开发环境做模板编译(预编译)
- 合理使用keep-alive
- webpack 层面的优化
- 前端通用的性能优化，如图片懒加载
- 使用SSR
