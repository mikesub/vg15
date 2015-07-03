import React from 'react';

import BaseGraph from './base-graph.js';

import categories from '../data/categories.json';

const whiteList = Object.values(categories).reduce((prev, i) => (prev.concat(i)), []);

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const category = this.props.selectedNumber.category;

    if (!whiteList.includes(category)) {
      return null;
    }

    const data = this.props.data.filter(i => i.category === category);

    return (
          <BaseGraph
              title={category}
              selectedNumber={this.props.selectedNumber}
              data={data}
              graphStep={this.props.graphStep}
              />
    );
  }
}

