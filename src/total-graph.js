import React from 'react';
import moment from 'moment';

import BaseGraph from './base-graph.js';

export default class TotalGraph extends React.Component {

  render() {
    return (
        <BaseGraph
          title='Абсолют'
          selectedNumber={this.props.selectedNumber}
          data={this.props.data}
          graphStep={this.props.graphStep}
          />
    );
  }
}

