import React from 'react';

import Styles from './css/root.css';

import { state, registerCallback } from '../store.js';

import Input from './input.react.js';
import Details from './details.react.js';
import GraphStep from './graphStep.react.js';
import Graphs from './graphs.react.js';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = state;
    registerCallback(this.setState.bind(this));
  }

  render() {
    return (
      <div className="root">
        <a href="http://data.3sport.org/vg-2015/events/426/results">результаты ВГ-2015</a>
        <Input/>
        <Details number={this.state.selectedNumber}/>
        <GraphStep value={this.state.graphStep}/>
        <Graphs selectedNumber={this.state.selectedNumber} data={this.state.data} graphStep={this.state.graphStep}/>
      </div>
    );
  }
}

        //<Categories categories={this.state.categories}/>
