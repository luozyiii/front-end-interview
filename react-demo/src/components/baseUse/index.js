import React, { Component } from 'react';
import JSXBaseDemo from './JSXBaseDemo';
import ConditionDemo from './ConditionDemo';
import ListDemo from './ListDemo';
import EventDemo from './EventDemo';
import FormDemo from './FormDemo';
import PropsDemo from './PropsDemo';
import StateDemo from './StateDemo';
import UnControlledDemo from './UnControlledDemo'
import PortalsDemo from './PortalsDemo'
import ContextDemo from './ContextDemo'
import LazyDemo from './LzayDemo'
import SCUDemo1 from './SCUDemo1'
import SCUDemo2 from './SCUDemo2'
import HOCDemo from './HOCDemo'
import RenderPropsDemo from './RenderPropsDemo'

export default class BaseUseDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
          {/* <JSXBaseDemo/> */}
          {/* <ConditionDemo/> */}
          {/* <ListDemo/> */}
          {/* <EventDemo/> */}
          {/* <FormDemo/> */}
          {/* <PropsDemo/> */}
          {/* <StateDemo/> */}
          {/* <UnControlledDemo/> */}
          {/* <PortalsDemo>Modal 内容</PortalsDemo> */}
          {/* <ContextDemo/> */}
          {/* <LazyDemo/> */}
          {/* <SCUDemo1/> */}
          {/* <SCUDemo2/> */}
          {/* <HOCDemo/> */}
          <RenderPropsDemo a="100"/>
      </div>
    )
  }
}