import React from 'react';

import TotalGraph from './total-graph.js';
import SameSexGraph from './same-sex-graph.js';
import OppositeSexGraph from './opposite-sex-graph.js';
import CategoryGraph from './category-graph.js';
import PrevCategoryGraph from './prev-category-graph.js';
import NextCategoryGraph from './next-category-graph.js';

export default class Graphs extends React.Component {
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
