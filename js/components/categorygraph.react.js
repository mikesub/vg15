import React from 'react';

import BaseGraph from './baseGraph.react.js';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const category = this.props.selectedNumber.category;
    const data = this.props.data.filter(i => i.category === category);
    const dataPos = data.filter((i) => (i.ms < this.props.selectedNumber.ms)).length;
    const title = `Category (${category} ${dataPos}/${data.length})`;

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

