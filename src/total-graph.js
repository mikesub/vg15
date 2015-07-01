import React from 'react';
import moment from 'moment';

import BaseGraph from './base-graph.js';

export default class TotalGraph extends React.Component {

  render() {

    let title = '';
    if (this.props.selectedNumber) {
      title = `Все: ${this.props.selectedNumber.absPos}/${this.props.data.length}`;
    } else {
      title = `Все: ${this.props.data.length}`;
    }

    return (
        <BaseGraph
          title={title}
          selectedNumber={this.props.selectedNumber}
          data={this.props.data}
          graphStep={this.props.graphStep}
          />
    );
  }
}

