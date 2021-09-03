import React, { Component } from 'react';

export default class EventDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: 'zhangsan',
        list: [
            {
                id: 'id-1',
                title: '标题1'
            },
            {
                id: 'id-2',
                title: '标题2'
            },
            {
                id: 'id-3',
                title: '标题3'
            }
        ]
    };
    // 修改方法的 this 指向
    this.clickHander1 = this.clickHander1.bind(this)
  }

  clickHander1() {
      console.log('this...',this) // this 默认是 undefined
      this.setState({
          name: 'lisi'
      })
  }

  // 静态方法this 指向当前实例
  clickHander2 = ()=> {
    this.setState({
        name: 'lisi2'
    })
  }

  clickHander3 = (event)=> {
    event.preventDefault()  // 阻止默认行为
    event.stopPropagation() // 阻止冒泡
    console.log('target', event.target) // 指向当前元素，即当前元素触发
    console.log('currentTarget', event.currentTarget) // 指向当前元素，假象！！！

    // 注意， event 其实是 React封装的，合成事件
    console.log('event', event) // 不是原生的Event
    console.log('event.__proto__.constructor',event.__proto__.constructor)

    // 原生 event 如下。其 __proto__.constructor 是 MouseEvent
    console.log('nativeEvent', event.nativeEvent)
    console.log('nativeEvent.target', event.nativeEvent.target) // 指向当前元素
    console.log('nativeEvent.currentTarget', event.nativeEvent.currentTarget) // 指向 document !!!
    
    // event 是 SyntheticBaseEvent 合成事件， 模拟出来 DOM 事件所有能力
    // event.nativeEvent 是原生事件对象
    // 所有的事件都被挂载到 document 上
    // 和 DOM 事件不一样，和 Vue 事件也不一样
}

clickHander4 (index) {
    console.log('index', index)
}

  render() {
    return (
      <div>
          {/* this - 使用 bind */}
          <p onClick={this.clickHander1}>{this.state.name}</p>
          {/* 使用静态函数 */}
          <p onClick={this.clickHander2}>{this.state.name}</p>
          {/* event  */}
          <a href="https://baidu.com" onClick={this.clickHander3}>click me</a>
          <ul>
              {
                  this.state.list.map((item, index) => {
                      return <li key={item.id} onClick={()=> this.clickHander4(index)}>{item.title}</li>
                  })
              }
          </ul>
      </div>
    )
  }
}