import React, { Component } from 'react';
import JSXBaseDemo from './baseUse/JSXBaseDemo';
import ConditionDemo from './baseUse/ConditionDemo';
import ListDemo from './baseUse/ListDemo';
import EventDemo from './baseUse/EventDemo';
import FormDemo from './baseUse/FormDemo';
import PropsDemo from './baseUse/PropsDemo';
import StateDemo from './baseUse/StateDemo';
import UnControlledDemo from './advanced/UnControlledDemo'
import PortalsDemo from './advanced/PortalsDemo'
import ContextDemo from './advanced/ContextDemo'
import LazyDemo from './advanced/LzayDemo'
import SCUDemo1 from './advanced/SCUDemo1'
import SCUDemo2 from './advanced/SCUDemo2'
import HOCDemo from './advanced/HOCDemo'
import RenderPropsDemo from './advanced/RenderPropsDemo'

export default class Demo extends Component {

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