import React, { Component } from 'react';
import JSXBaseDemo from './JSXBaseDemo';
import ConditionDemo from './ConditionDemo';
import ListDemo from './ListDemo';
import EventDemo from './EventDemo';
import FormDemo from './FormDemo';
import PropsDemo from './PropsDemo';
import StateDemo from './StateDemo';

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
          <StateDemo/>
      </div>
    )
  }
}