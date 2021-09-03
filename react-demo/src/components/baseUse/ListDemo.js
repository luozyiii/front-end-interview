import React, { Component } from 'react';

export default class ListDemo extends Component {

  constructor(props) {
    super(props);
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

  render() {
    return (
      <ul>
          {
              // 这里的 key 和 Vue 的 key 类似，必填，不能是index 或random
              this.state.list.map((item, index) => {
                  return <li key={item.id}>title:{item.title} index:{index}</li>
              })
          }
      </ul>
    )
  }
}