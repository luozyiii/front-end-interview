# React Hooks (加分项)
> react-hooks-demo
```bash
npx create-react-app react-hooks-demo
```
- 可选功能（class 组件 vs Hooks）
- 100%向后兼容，没有破坏性
- 不会取代class组件，尚无计划要移除class组件
- 学习hooks 的前提，必须学好class

## 主要内容
- State Hook
- Effect Hook
- 其他 Hook
- 自定义 Hook
- 组件逻辑复用
- 规范和注意事项

## 几个面试题
- 为什么会有React Hooks，它解决了哪些问题？
- React Hooks 如何模拟生命周期？
- 如何自定义 Hooks？
- React Hooks 性能优化
- 使用React Hooks遇到哪些坑？
- Hooks 相比 HOC 和 Render Prop 有哪些优缺点？

## 认识 React Hooks

### 回顾 React 函数组件
```javascript
// class 组件
import React, { Component } from 'react';

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
```

```javascript
// 函数组件
import React, { useState, useEffect } from 'react';

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div>

    </div>
  )
}
```

#### 函数组件的特点
- 没有组件实例
- 没有生命周期
- 没有 state 和 setState，只能接收props

#### class 组件的问题
- 大型组件很难拆分和重构，很难测试（即class不易拆分）
- 相同业务逻辑，分散到各个方法中，逻辑混乱
- 复用逻辑变的复杂，如Mixins、HOC、Render Prop

#### React 组件更易用函数表达
- React 提倡函数式编程，view = fn(props)
- 函数更灵活，更易拆分，更易测试
- 但函数组件太简单，需要增强能力 -- Hooks

### State Hook

#### 让函数组件实现 state 和 setState
> react-hooks-demo/components/ClickCounter

- 默认函数组件没有state
- 函数组件一个纯函数，执行完即销毁，无法存储 state
- 需要 State Hook，即把 state 功能 “钩” 到纯函数

#### useState 使用总结
- useState(0) 传入初始值，返回数组[state, setState]
- 通过 state 获取值
- 通过 setState(1) 修改值

#### Hooks 命名规范
- 规定所有的 Hooks 都是 use 开头，如useXxx
- 自定义 Hooks 也要以 use 开头
- 非 Hooks 的地方，尽量不要使用 useXxx写法

### Effect Hook

#### 让函数组件模拟生命周期
> react-hooks-demo/components/LiftCycles
```javascript
// 模拟class 组件的 DidMount 和 DidUpdate
useEffect(() => {
    console.log('在此发送一个ajax请求')
})

// 模拟class 组件的 DidMount
useEffect(() => {
    console.log('加载完了')
},[]) // 第二个参数 是 [] 不依赖 任何 state

// 模拟class 组件的 DidUpdate
useEffect(() => {
    console.log('更新了')
}, [count]) // 第二个参数就是依赖的 state

useEffect(() => {
    let timerId = setInterval(() => {
        console.log(Date.now())
    }, 1000)

    // 返回一个函数
    // 模拟组件销毁 WillUnMount
    return () => {
        clearInterval(timerId)
    }
}, [])

```
- 默认函数组件没有生命周期
- 函数组件是一个纯函数，执行完即销毁，自己无法实现生命周期
- 通过 Effect Hook 把生命周期 “钩” 到纯函数中

#### useEffect 使用总结
- 模拟 componentDidMound - useEffect 依赖 []
- 模拟 componentDidUpdate- useEffect 无依赖，或者依赖[a, b]
- 模拟 componentWillUnMount- useEffect 中返回一个函数

#### useEffect 让纯函数有了副作用
- 默认情况下，执行纯函数，输入参数，返回结果，无副作用
- 所谓副作用，就是对函数之外造成影响，如设置全局定时任务
- 而组件需要副作用，所有需要 useEffect "钩" 如纯函数中

#### 用useEffect模拟WillUnMount时的注意事项
> react-hooks-demo/components/FriendStatusClass; react-hooks-demo/components/FriendStatus

#### useEffect 中返回函数 fn
- useEffect 依赖 [], 组件销毁是执行 fn, 等同于WillUnmount
- useEffect 无依赖或者依赖 [a,b], 组件更新时执行 fn
- 即, 下一次执行 useEffect 之前, 就会执行 fn, 无论更新或卸载

### 其他 Hooks
- useRef
> react-hooks-demo/components/UseRefDemo

- useContext
> react-hooks-demo/components/UseContextDemo

- useReducer
> react-hooks-demo/components/UseReducerDemo

- useMemo
> react-hooks-demo/components/UseMemoDemo

- useCallback
> react-hooks-demo/components/UseCallbackDemo

#### useReducer 和 redux 的区别
- useReducer 是 useState 的代替方案，用于state复杂变化
- useReducer 是单个组件状态管理，组件通讯害需要 props
- redux 是全局的状态管理，多组件共享数据

#### useMemo 使用总结
- React 默认会更新所有子组件
- class 组件使用 SCU 和 PureComponent 做优化
- Hooks 中使用useMemo，但优化的原理是相同的

#### useCallback 使用总结
- useMemo 缓存数据
- useCallback 缓存函数
- 两者都是 React Hooks 的常见优化策略

### 自定义 Hook
- 封装通用的功能
- 开发和使用第三方 Hooks
- 自定义 Hook 带来了无限的拓展性，解耦代码

#### 总结
- 本质是一个函数，以use开头（重要）
- 内部正常使用 useState useEffect 或者其他 Hooks
- 自定义返回结果，格式不限

### Hooks 使用规范(注意事项)
- 只能用于 React 函数组件和自定义 Hook 中，其他地方不可以
- 只能用于顶层代码，不能在循环、判断中使用Hooks

### 为何Hooks要依赖于调用顺序？
> react-hooks-demo/components/Teach
- 无论是render 还是re-render，Hooks调用顺序必须一致
- 如果Hooks出现再循环、判断里、则无法保证顺序一致
- Hooks严重依赖于调用顺序！重要！

### Class 组件复用有哪些问题

#### Mixins的问题
- 变量作用域来源不清
- 属性重名
- Mixins 引入过多会导致顺序冲突

#### 高阶组件HOC的问题
- 组件层级嵌套过多，不易渲染，不易调试
- HOC 会劫持props，必须严格规范，容易出现疏漏

#### Render Prop
- 学习成本高，不易理解
- 只能传递纯函数，而默认情况下纯函数功能有限

### 使用React Hooks 时要避免的错误
- 不要更改 Hook 调用顺序（不要在循环、条件或嵌套函数内调用 Hook）
- 不要使用过时状态
- 不要创建过时的闭包
- 不要将状态用于基础结构数据
> 基础结构数据，例如有关渲染周期（即首次渲染，渲染数量），计时器ID（setTimeout()，setInterval()），对DOM元素的直接引用等详细信息，应使用引用useRef()进行存储和更新。
- 不要忘记清理副作用
> 比如获取请求或使用setTimeout()这样的计时器，都是异步的。