import React from 'react';

import BaseGraph from './base-graph.js';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const sex = this.props.selectedNumber.category.substring(0,1) === 'M' ? 'F' : 'M';
    const data = this.props.data.filter(i => i.category.substring(0,1) === sex);
    const title = `Opposite Sex (${sex})`;

    return (
          <BaseGraph
              title={title}
              selectedNumber={this.props.selectedNumber}
              data={data}
              graphStep={this.props.graphStep}
              />
    );
  }
}

