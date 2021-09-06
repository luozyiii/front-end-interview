import React, { Component } from 'react';
import ReactDom from 'react-dom'

import './style.css'

export default class ProtalsDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // 正常渲染
    // return (
    //   <div className="modal">
    //     {this.props.children}
    //   </div>
    // )

    // 使用 Portals 渲染到 body 上
    // fixed 元素要放在 body 上，有更好的浏览器兼容性
    return ReactDom.createPortal(<div className="modal">{this.props.children}</div>, document.body)
  }
}