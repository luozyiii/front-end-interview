import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Mouse extends Component {
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
        {/* 将当前 state 作为 props ，传递给 render */}
        {this.props.render(this.state)}
      </div>
    )
  }
}

Mouse.propTypes = {
  render: PropTypes.func.isRequired // 必须接收一个 render 属性
}

const App = (props) => (
  <div style={{height: '500px'}}>
    props.a:{props.a}
    <Mouse render={
      ({x, y}) => <h1>The mouse position is ({x} , {y})</h1>
    } />
  </div>
)

// 即：定义了 Mouse 组件， 只有获取x， y 的能力
// 至于 Mouse 组件如何渲染， App 说了算，即通过 render props 的方式 告诉 Mouse

export default App