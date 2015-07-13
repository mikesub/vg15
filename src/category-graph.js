import React from 'react';

import BaseGraph from './base-graph.js';

import {humanCat} from './utils.js';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const category = this.props.selectedNumber.category;
    const data = this.props.data.filter(i => i.category === category);

    if (data.length === 1) {
      return null;
    }

    return (
          <BaseGraph
              title={humanCat(category)}
              selectedNumber={this.props.selectedNumber}
              data={data}
              graphStep={this.props.graphStep}
              />
    );
  }
}

