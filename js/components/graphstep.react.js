import React from 'react';

import {changeGraphStep} from '../store.js';

export default class extends React.Component {

  onChange(event) {
    changeGraphStep(Number(event.target.value));
  }

  render() {
    return (
      <div>
        <div className="filter-header">
          Graph step: {this.props.value / 60}mins
        </div>
        <div>
          <input type="range" min="300" max="3600" step="300" value={this.props.value} onChange={this.onChange}/>
        </div>
      </div>
    )
  }
}
