import React, { Component } from 'react';
import PropTypes from 'prop-types'
import _ from 'loadsh'

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
    shouldComponentUpdate(nextProps, nextState) {
      // 做数组或对象的深度比较
      if(_.isEqual(nextProps.list, this.props.list)) {
        return false // 相等则不渲染
      }
      return true // 不相等，则渲染
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
        ]
    };
  }

  onSubmitTitle = (title) => {
    // 正确的写法
      // this.setState({
      //     list: this.state.list.concat({
      //         id: `id-${Date.now()}`,
      //         title
      //     })
      // })

      // 为了演示SCU，故意写的错误的语法
      this.state.list.push({
        id: `id-${Date.now()}`,
        title
      })
      this.setState({
        list: this.state.list
      })
  }

  render() {
    return (
      <div>
          <Input submitTitle={this.onSubmitTitle}/>
          <List list={this.state.list}></List>
      </div>
    )
  }
}