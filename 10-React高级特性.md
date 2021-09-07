# React 高级特性
- 不是每个都很常用，但用到的时候必须知道
- 考察候选人对React掌握是否全面，且有深度
- 考察做过的项目是否有深度和复杂度（至少用过高级特性）

## 函数组件
- 纯函数，输入Props ，输出JSX
- 没有实例，没有生命周期，没有state
- 不能拓展其他方法

## 非受控组件
> react-demo/src/components/baseUse/UnControlledDemo.js
- ref
- defaultValue 和 defaultChecked

### 使用场景
- 必须手动操作DOM元素，setState实现不了
- 文件上传 <input type="file">
- 某些富文本编辑器，需要传入DOM元素

### 受控组件 VS 非受控组件
- 优先使用受控组件，符合 React 设计原则
- 必须操作 DOM时，再使用非受控组件

## Portals
> react-demo/src/components/baseUse/PortalsDemo.js
- 组件默认会按照既定的层级嵌套渲染
- 如何让组件渲染到父组件以外

### 使用场景
-  overflow: hidden
- 父组件 z-index 值太小
- fixed 需要放在body 第一层级

## context
> react-demo/src/components/baseUse/ContextDemo.js
- 公共信息（语言、主题）如何传递给每个组件？
- 用props 传递太繁琐
- 用redux小题大做

## 异步组件
> react-demo/src/components/baseUse/LzayDemo.js
- import()
- React.lazy
- React.Suspense

## 性能优化(`重点`)
- 性能优化，永远的面试的重点
- 性能优化对React更加重要
- 回顾setState的重点强调的不可变值

### shouldComponentUpdate（简称：SCU）
- React 默认：父组件有更新，子组件则无条件更新！！！
> react-demo/src/components/baseUse/SCUDemo1.js
```javascript
// 基本用法
shouldComponentUpdate(nextProps, nextState) {
  if(nextState.count !== this.state.count) {
    return true // 可以渲染
  }
  return false // 不重复渲染
}
```
> react-demo/src/components/baseUse/SCUDemo2.js

#### SCU 使用总结
- SCU默认返回true，即React默认重新渲染所有子组件
- 必须配合 “不可变值” 一起使用
- 可先不用，有性能问题再考虑使用

### PureComponent 和 React.memo
- PureComponent，SCU中实现了浅比较
- memo，函数组件中的 PureComponent
- 浅比较已经满足大部分场景（尽量不要做深度比较）

### 不可变值：immutable.js
- 彻底拥抱“不可变值”
- 基于共享数据（不是深拷贝），速度好
- 有一定的学习和迁移成本，按需使用

# 关于组件公用逻辑的抽离
- mixin，已被 React 弃用
- 高阶组件 HOC
- Render Props

## 高阶组件HOC
> react-demo/src/components/baseUse/HOCDemo.js
### 高阶组件的基本用法
```javascript
// 高阶组件不是一种功能，而是一种模式
const HOCFactory = (Component) => {
  class HOC extents React.Component {
    // 在此定义多个组件的公用逻辑
    render() {
      return <Component {...this.props}/> // 返回拼装的结果
    }
  }
  return HOC
}
const Component1 = HOCFactory(WrapComponent1)
const Component2 = HOCFactory(WrapComponent2)
```
- redux connect 是高阶组件

## Render Props

### 基本用法
```javascript
// Render Props 的核心思想
// 通过一个函数将 class 组件的 state 作为 props传递给纯函数组件
class Factory extends React.Component{
  constructor() {
    this.state = {
      // state 即多个组件的公用逻辑的数据
    }
  }
  // 修改 state
  render() {
    return <div>{this.props.render(this.state)}</div>
  }
}
const App = () => {
  <Factory render={
    // render 是一个函数组件
    (props) => <p>{props.a} {props.b} ...</p>
  } />
}
```

### HOC VS Render Props
- HOC：模式简单，但会增加组件层级
- Render Props：代码简洁，学习成本较高
- 按需使用