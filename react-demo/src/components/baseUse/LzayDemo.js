import React, { Component } from 'react';

const ContextDemo = React.lazy(() => import('./ContextDemo'))

export default class LzayDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // 强制刷新，可看到loading（看不到就限制一个chrome的网速）
    // 看 network 的js加载
    return (
      <div>
        <p>引入一个动态组件</p>
        <hr />
        <React.Suspense fallback={<div>loading...</div>}>
          <ContextDemo />
        </React.Suspense>
      </div>
    )
  }
}