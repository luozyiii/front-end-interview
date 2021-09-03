import React, { Component } from 'react';
import JSXBaseDemo from './JSXBaseDemo';
import ConditionDemo from './ConditionDemo';
import ListDemo from './ListDemo';
import EventDemo from './EventDemo';

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
          <EventDemo/>
      </div>
    )
  }
}