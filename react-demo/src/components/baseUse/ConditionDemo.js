import React, { Component } from 'react';

export default class ConditionDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        theme: 'black'
    };
  }

  render() {
      const blackBtn = <button className="btn-black">black btn</button>
      const whiteBtn = <button className="btn-white">white btn</button>
      
      // if else
    //   if(this.state.theme === 'black') {
    //       return blackBtn
    //   }else {
    //     return whiteBtn
    //   }

      // 三元表达式
    //   return <div>{this.state.theme === 'black' ? blackBtn : whiteBtn}</div>

      // &&
      return <div>{this.state.theme === 'black' && blackBtn }</div>
  }
}