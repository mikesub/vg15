import React from 'react';

import BaseGraph from './base-graph.js';
import {translations} from './utils.js';

export default class extends React.Component {

  render() {
    const sex = this.props.selectedNumber.category.substring(0,1);

    if (!['M','F'].includes(sex)) {
      return null;
    }

    const oppositeSex = sex === 'M' ? 'F' : 'M';
    const data = this.props.data.filter(i => i.category.substring(0,1) === oppositeSex);

    return (
          <BaseGraph
              title={translations[oppositeSex]}
              selectedNumber={this.props.selectedNumber}
              data={data}
              graphStep={this.props.graphStep}
              />
    );
  }
}

