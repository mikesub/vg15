import React from 'react';

import BaseGraph from './baseGraph.react.js';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const sex = this.props.selectedNumber.category.substring(0,1);
    const data = this.props.data.filter(i => i.category.substring(0,1) === sex);

    return (
        <div>
          <h2>Same Sex ({sex})</h2>
          <BaseGraph
              selectedNumber={this.props.selectedNumber}
              data={data}
              graphStep={this.props.graphStep}
              />
        </div>
    );
  }
}

