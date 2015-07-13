import React from 'react';

import BaseGraph from './base-graph.js';

import {categories} from './store.js';
import {humanCat} from './utils.js';

export default class extends React.Component {

  render() {
    const currentCategory = this.props.selectedNumber.category;
    const sex = currentCategory.substring(0,1);
    const prevCategory = categories[categories.indexOf(currentCategory)-1];

    if (!prevCategory || prevCategory.substring(0,1) !== sex) {
      return null;
    }

    const data = this.props.data.filter(i => i.category === prevCategory);

    return (
        <BaseGraph
            title={`Предыдущая категория (${humanCat(prevCategory)})`}
            selectedNumber={this.props.selectedNumber}
            data={data}
            graphStep={this.props.graphStep}
            />
    );
  }
}

