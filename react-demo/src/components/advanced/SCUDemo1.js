import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: ''
    };
  }

  handleTitleChange = (e) => {
      this.setState({
          title: e.target.value
      })
  }

  onSubmit = () => {
    const { submitTitle } = this.props
    submitTitle(this.state.title)
    this.setState({
        title: ''
    })
  }

  render() {
    return (
      <div>
          <input value={this.state.title} onChange={this.handleTitleChange}></input>
          <button onClick={this.onSubmit}>提交</button>
      </div>
    )
  }
}

class List extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      };
    }
    render() {
        const { list } = this.props
      return (
        <ul>
          {
              list.map((item, index) => {
                  return <li key={item.id}>{item.title}</li>
              })
          }
      </ul>
      )
    }
}
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class Footer extends Component {

  componentDidUpdate() {
    console.log('footer did update')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.text !== this.props.text) {
      return true // 可以渲染
    }
    return false // 不重复渲染
  }

  // React 默认：父组件有更新，子组件则无条件更新！！！

  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

export default class PropsDemo extends Component {

  constructor(props) {
    super(props);
    // 状态(数据)提升
    this.state = {
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
        ],
        footerText: '这是底部'
    };
  }

  onSubmitTitle = (title) => {
      this.setState({
          list: this.state.list.concat({
              id: `id-${Date.now()}`,
              title
          })
      })
  }

  render() {
    return (
      <div>
          <Input submitTitle={this.onSubmitTitle}/>
          <List list={this.state.list}></List>
          <Footer text={this.state.footerText}></Footer>
      </div>
    )
  }
}