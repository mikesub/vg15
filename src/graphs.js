import React from 'react';

import TotalGraph from './total-graph.js';
import SameSexGraph from './same-sex-graph.js';
import OppositeSexGraph from './opposite-sex-graph.js';
import CategoryGraph from './category-graph.js';
import PrevCategoryGraph from './prev-category-graph.js';
import NextCategoryGraph from './next-category-graph.js';

export default class Graphs extends React.Component {

  comparingGraphs(props) {
    if (!this.props.selectedNumber) {
      return null;
    }
    return (
      <div>
        <CategoryGraph {...props}/>
        <PrevCategoryGraph {...props}/>
        <NextCategoryGraph {...props}/>
        <SameSexGraph {...props}/>
        <OppositeSexGraph {...props}/>
      </div>
    );
  }

  render() {

    const props = {
      selectedNumber: this.props.selectedNumber,
      data: this.props.data,
      graphStep: this.props.graphStep,
    };

    return (
      <div>
        <TotalGraph {...props}/>
        {this.comparingGraphs(props)}
      </div>
    )
  }
}
