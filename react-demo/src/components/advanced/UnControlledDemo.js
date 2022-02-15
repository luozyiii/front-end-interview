import React, { Component } from 'react';

export default class UnControlledDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'leslie',
      flag: true
    };
    this.nameInputRef = React.createRef()
    this.fileInputRef = React.createRef()
  }

  alertName = () => {
    const elem = this.nameInputRef.current // 通过ref 获取 Dom 节点
    alert(elem.value) // 不是state.name， 是真实dom的值
  }

  alertFile = () => {
    const file = this.fileInputRef.current
    console.log(file.value)
  }

  render() {
    return (
      <div>
        {/* 使用 defaultValue 而不是 value, 使用ref */}
        <input defaultValue={this.state.name} ref={this.nameInputRef}/>
        {/* state.name 并不会改变 */}
        <p>state.name: {this.state.name}</p>
        <button onClick={this.alertName}>alert name</button>

        { /* checked defaultChecked */ }
        <input type="checkbox" defaultChecked={this.state.flag} /> <br/>

        <input type="file" ref={this.fileInputRef}/>
        <button onClick={this.alertFile}>alert file</button>

      </div>
    )
  }
}