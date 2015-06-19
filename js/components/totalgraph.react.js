import React from 'react';
import moment from 'moment';

import BaseGraph from './baseGraph.react.js';

export default class extends React.Component {

  render() {
    return (
      <div>
        <h2>Total</h2>
        <BaseGraph
          selectedNumber={this.props.selectedNumber}
          data={this.props.data}
          graphStep={this.props.graphStep}
          />
      </div>
    );
  }
}

