import React, { Component } from 'react';

// 创建 Context 填入默认值（任何一个js变量）
const ThemeContext = React.createContext('light')

// 底层组件 - 函数组件
function ThemeLink(props){
  // 函数式组件可以使用Customer
  return (
    <ThemeContext.Consumer>
      { value => <p>link's theme is {value}</p>}
    </ThemeContext.Consumer>
  )
}

// 底层组件 - class 组件
class ThemedButton extends Component {
  // 指定contextType 读取当前的 theme context
  // static contextType = ThemeContext // 也可以用 ThemedButton.contextType = ThemeContext
  render() {
    const theme = this.context // React 会往上找到最近的 theme
    return (
      <div>
        <p>button's theme is {theme}</p>
      </div>
    )
  }
}
ThemedButton.contextType = ThemeContext

// 中间组件再也不必指明向下传递 theme 了
function ToolBar(props) {
  return (
    <div>
      <ThemedButton></ThemedButton>
      <ThemeLink></ThemeLink>
    </div>
  )
}

export default class ContextDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
  }

  changeTheme = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light'
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ToolBar />
        <br />
        <button onClick={this.changeTheme}>change theme</button>
      </ThemeContext.Provider>
    )
  }
}