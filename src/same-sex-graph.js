import React from 'react';

import BaseGraph from './base-graph.js';

import {translations} from './utils.js';

export default class extends React.Component {

  render() {
    if (!this.props.selectedNumber) {
      return null;
    }

    const sex = this.props.selectedNumber.category.substring(0,1);

    if (!['M','F'].includes(sex)) {
      return null;
    }

    const data = this.props.data.filter(i => i.category.substring(0,1) === sex);

    return (
          <BaseGraph
              title={translations[sex]}
              selectedNumber={this.props.selectedNumber}
              data={data}
              graphStep={this.props.graphStep}
              />
    );
  }
}

