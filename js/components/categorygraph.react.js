import React from 'react';

import BaseGraph from './baseGraph.react.js';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const category = this.props.selectedNumber.category;
    const data = this.props.data.filter(i => i.category === category);

    return (
        <div>
          <h2>Category ({category})</h2>
          <BaseGraph
              selectedNumber={this.props.selectedNumber}
              data={data}
              graphStep={this.props.graphStep}
              />
        </div>
    );
  }
}

