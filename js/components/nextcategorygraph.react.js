import React from 'react';

import BaseGraph from './baseGraph.react.js';

import categories from '../../data/categories.json';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const _category = this.props.selectedNumber.category;
    var category;
    const sex = this.props.selectedNumber.category.substring(0,1);
    if (sex === 'M') {
      category = categories.male[categories.male.indexOf(_category)+1];
    } else {
      category = categories.female[categories.female.indexOf(_category)+1];
    }

    if (!category) {
      return null;
    }

    const data = this.props.data.filter(i => i.category === category);

    return (
        <div>
          <h2>Next Category {category}</h2>
          <BaseGraph
              selectedNumber={this.props.selectedNumber}
              data={data}
              graphStep={this.props.graphStep}
              />
        </div>
    );
  }
}
