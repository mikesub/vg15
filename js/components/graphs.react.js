import React from 'react';

import TotalGraph from './totalGraph.react.js';
import SameSexGraph from './sameSexGraph.react.js';
import OppositeSexGraph from './oppositeSexGraph.react.js';
import CategoryGraph from './categoryGraph.react.js';
import PrevCategoryGraph from './prevCategoryGraph.react.js';
import NextCategoryGraph from './nextCategoryGraph.react.js';

export default class extends React.Component {
  render() {
    return (
      <div>
        <TotalGraph
          selectedNumber={this.props.selectedNumber}
          data={this.props.data}
          graphStep={this.props.graphStep}
        />
        <SameSexGraph
          selectedNumber={this.props.selectedNumber}
          data={this.props.data}
          graphStep={this.props.graphStep}
        />
        <OppositeSexGraph
          selectedNumber={this.props.selectedNumber}
          data={this.props.data}
          graphStep={this.props.graphStep}
        />
        <CategoryGraph
          selectedNumber={this.props.selectedNumber}
          data={this.props.data}
          graphStep={this.props.graphStep}
        />
        <PrevCategoryGraph
          selectedNumber={this.props.selectedNumber}
          data={this.props.data}
          graphStep={this.props.graphStep}
        />
        <NextCategoryGraph
          selectedNumber={this.props.selectedNumber}
          data={this.props.data}
          graphStep={this.props.graphStep}
        />
      </div>
    )
  }
}
