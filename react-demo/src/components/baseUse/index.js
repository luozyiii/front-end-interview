import React, { Component } from 'react';
import JSXBaseDemo from './JSXBaseDemo';
import ConditionDemo from './ConditionDemo';
import ListDemo from './ListDemo';
import EventDemo from './EventDemo';
import FormDemo from './FormDemo';
import PropsDemo from './PropsDemo';
import StateDemo from './StateDemo';
import UnControlledDemo from './UnControlledDemo'
import ProtalsDemo from './ProtalsDemo'
import ContextDemo from './ContextDemo'
import LazyDemo from './LzayDemo'
import SCUDemo1 from './SCUDemo1'
import SCUDemo2 from './SCUDemo2'

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
          {/* <ProtalsDemo>Modal 内容</ProtalsDemo> */}
          {/* <ContextDemo/> */}
          {/* <LazyDemo/> */}
          {/* <SCUDemo1/> */}
          <SCUDemo2/>
      </div>
    )
  }
}