import React from 'react';

import BaseGraph from './base-graph.js';

import {categories} from './store.js';
import {humanCat} from './utils.js';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const currentCategory = this.props.selectedNumber.category;
    const sex = currentCategory.substring(0,1);
    const nextCategory = categories[categories.indexOf(currentCategory)+1];

    if (!nextCategory || nextCategory.substring(0,1) !== sex) {
      return null;
    }

    const data = this.props.data.filter(i => i.category === nextCategory);

    return (
          <BaseGraph
              title={`Следующая категория (${humanCat(nextCategory)})`}
              selectedNumber={this.props.selectedNumber}
              data={data}
              graphStep={this.props.graphStep}
              />
    );
  }
}

