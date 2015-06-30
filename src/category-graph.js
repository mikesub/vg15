import React from 'react';

import BaseGraph from './base-graph.js';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const category = this.props.selectedNumber.category;
    const data = this.props.data.filter(i => i.category === category);
    const title = `Category (${category} ${this.props.selectedNumber.categoryPos}/${data.length})`;

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

