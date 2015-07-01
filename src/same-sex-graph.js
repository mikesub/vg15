import React from 'react';

import BaseGraph from './base-graph.js';

import {sexTrl} from './utils.js';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const sex = this.props.selectedNumber.category.substring(0,1);
    const data = this.props.data.filter(i => i.category.substring(0,1) === sex);
    const title = `${sexTrl[sex]}: ${this.props.selectedNumber.sexPos}/${data.length}`;
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

