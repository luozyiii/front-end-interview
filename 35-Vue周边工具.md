# Vue 周边工具

## Vuex
- 面试考点并不多（因为熟悉Vue之后，vuex没有难度）
- 但基本概念、基本使用和API必须要掌握
- 可能会考察 state 的数据结构设计

### Vuex 基本概念
- state
- getters
- action
- mutation

### 用于Vue组件
- dispatch
- commit
- mapState
- mapGetters
- mapActions
- mapMutations

![流程图](https://vuex.vuejs.org/vuex.png)

## vue-router
- 面试考点并不多（前提是熟悉Vue）
- 路由模式（hash、H5 history）
- 路由配置（动态路由、懒加载）

### vue-router 路由模式
- hash 模式（默认），如：http://abc.com/#/goods/10
- H5 history 模式，如：http://abc.com/goods/10
- 后者需要serve端支持，因此无特殊需求可选择前者

### 动态路由
```javascript
{
    path: '/goods/:id',
    component: Goods
}
```

### 懒加载
```javascript
{
    path: '/feedback',
    component: () => import(/* webpackChunkName: "feedback" */ './FeedBack')
}
```


