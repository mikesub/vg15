import React from 'react';

import {changeGraphStep} from './store.js';

import css from './graph-step.css';

export default class GraphStep extends React.Component {

  onChange(event) {
    changeGraphStep(Number(event.target.value));
  }

  render() {
    return (<div className={css.wrap}>
      <input className={css.slider} type="range" min="300" max="3600" step="300" value={this.props.value} onChange={this.onChange}/>
    </div>);
  }
}
