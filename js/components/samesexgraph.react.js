import React from 'react';

import BaseGraph from './baseGraph.react.js';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const sex = this.props.selectedNumber.category.substring(0,1);
    const data = this.props.data.filter(i => i.category.substring(0,1) === sex);
    const dataPos = data.filter((i) => (i.ms < this.props.selectedNumber.ms)).length;
    const title = `Same Sex (${sex} ${dataPos}/${data.length})`;
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

