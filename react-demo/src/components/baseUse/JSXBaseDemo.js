import React, { Component } from 'react';

export default class JSXBaseDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: 'leslie',
        imgUrl: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
        flag: true
    };
  }

  render() {
      const styleData = {fontSize: '30px', color: 'red'}
      const rawHtml = '<span>富文本内容<i>斜体</i><b>加粗</b></span>'
      const rawHtmlData = {
          __html:rawHtml
      }
    return (
      <div>
          <h4>获取变量 插值</h4>
          <p>{this.state.name}</p>
          <h4>表达式</h4>
          <p>{this.state.flag ? 'yes' : 'no'}</p>
          <h4>子元素</h4>
          <p><img style={{width: '60px'}} src={this.state.imgUrl} alt=""/></p>
          <h4>class</h4>
          <p className="abc">设置 css class</p>
          <h4>style</h4>
          <p style={styleData}>设置 style css</p>
          <h4>原生HTML</h4>
          <p dangerouslySetInnerHTML={rawHtmlData}></p>
          <p>{rawHtml}</p>
          <h4>加载组件</h4>
      </div>
    )
  }
}