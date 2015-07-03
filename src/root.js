import React from 'react';

import { state, registerCallback } from './store.js';

import Input from './input.js';
import Details from './details.js';
import GraphStep from './graph-step.js';
import Graphs from './graphs.js';

import css from './root.css';

export default class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = state;
    registerCallback(this.setState.bind(this));
  }

  render() {
    return (
      <div className={css.wrap}>
        <div className={css.aside}>
          <GraphStep value={this.state.graphStep}/>
          <Input number={this.state.selectedNumber}/>
          <Details number={this.state.selectedNumber} total={this.state.data.length} />
        </div>
        <Graphs selectedNumber={this.state.selectedNumber} data={this.state.data} graphStep={this.state.graphStep}/>
      </div>
    );
  }
}
