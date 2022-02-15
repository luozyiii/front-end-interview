import React, { Component } from 'react';

const withMouse = (Component) => {

  class withMouseComponent extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0
      };
    }

    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }
  
    render() {
      return (
        <div style={{height: '500px'}} onMouseMove={this.handleMouseMove}>
          {/* 1.透传所有的 props, 2.增加 mouse 属性 */}
          <Component {...this.props} mouse={this.state}></Component>
        </div>
      )
    }
  }
  return withMouseComponent
}

class HOCDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {x, y} = this.props.mouse // 接收 mouse 熟悉
    return (
      <div style={{height: '500px'}}>
        <h1>The mouse position is ({x} , {y})</h1>
      </div>
    )
  }
}
export default withMouse(HOCDemo) // 返回高阶组件