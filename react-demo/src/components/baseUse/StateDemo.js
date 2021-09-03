import React, { Component } from 'react';

export default class StateDemo extends Component {

  constructor(props) {
    super(props);
    // 第一，state 要在构造函数中定义
    this.state = {
        count: 0
    };
  }

  increase = () => {
      // 第二，不要直接修改state，使用不可变值
    //   this.state.count ++ // 错误用法
    //   this.setState({
    //       count: this.state.count + 1
    //   })

      // 第三，setState 可能是异步更新（有可能是同步更新）
    //   this.setState({
    //       count: this.state.count + 1
    //   },()=> {
    //       // 联想 vue $nextTick
    //       console.log('count by callback', this.state.count) // 回调后拿到最新值
    //   })
    //   console.log('count',this.state.count) // 异步的，拿不到最新值

      // setTimeout 中 setState 是同步的
    //   setTimeout(() => {
    //       this.setState({
    //           count: this.state.count + 1
    //       })
    //       console.log('count in setTimeout',this.state.count) 
    //   }, 0);

    // 自己定义的 DOM 事件，setState 是同步的


    // 第四，state 异步更新的话，更新前会被合并
    // 传入对象，会被合并（类似于 Object.assign）。执行结果只一次 +1
    // this.setState({
    //     count: this.state.count + 1
    // })
    // this.setState({
    //     count: this.state.count + 1
    // })
    // this.setState({
    //     count: this.state.count + 1
    // })

    // 传入函数，不会被合并。执行结果是 +3
    this.setState((prevState, props) => {
        return {
            count: prevState.count + 1
        }
    })
    this.setState((prevState, props) => {
        return {
            count: prevState.count + 1
        }
    })
    this.setState((prevState, props) => {
        return {
            count: prevState.count + 1
        }
    })
  }

  bodyClickHander = () => {
    this.setState({
        count: this.state.count + 1
    })
    console.log('count in body event',this.state.count) 
  }

  componentDidMount() {
      // 自己定义的 DOM 事件，setState 是同步的
    //   document.body.addEventListener('click', this.bodyClickHander)
  }

  componentWillUnmount() {
      // 及时销毁自定义 DOM 事件
    //   document.body.removeEventListener('click', this.bodyClickHander)
  }

  render() {
    return (
      <div>
          <p>{this.state.count}</p>
          <button onClick={this.increase}>累加</button>
      </div>
    )
  }
}

// --------------------  分割线  -------------------

// 不可变值(函数式变成，纯函数) - 数组
// const list5Copy = this.state.list5.slice()
// list5Copy.splice(2,0,'a')

// this.setState({
//     list1: this.state.list1.concat(100), // 追加
//     list2: [...this.state.list2, 100], // 追加
//     list3: this.state.list3.slice(0,3), // 截取
//     list4: this.state.list4.filter(item => item > 100), // 筛选
//     list5: list5Copy // 其他操作
// })
// 注意，不能对 this.state.list 进行 push pop splice 等，这样违反不可变值


// 不可变值 - 对象
// this.setState({
//     obj1: Object.assign({}, this.state.obj, {a:1}),
//     obj2: {...this.state.obj2, a: 100}
// })
// 注意，不能对 this.state.boj 进行数学设置，这样违反不可变值