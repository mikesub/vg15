import React from 'react';
import moment from 'moment';

import BaseGraph from './baseGraph.react.js';

export default class extends React.Component {

  render() {

    let title = '';
    if (this.props.selectedNumber) {
      title = `Total (${this.props.data.filter((i) => (i.ms < this.props.selectedNumber.ms)).length}/${this.props.data.length})`;
    } else {
      title = `Total (${this.props.data.length})`;
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

