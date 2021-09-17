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
- useMemo
- useCallback