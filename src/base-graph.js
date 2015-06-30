import React from 'react';
import moment from 'moment';

import Bar from './bar.js';

const humanize = function (x) {
  var t = moment.duration(x);
  return t.hours() + 'h' + t.minutes() + 'm';
};

export default class extends React.Component {

  render() {
    var bars = [];
    const selectedNumber = this.props.selectedNumber;
    const data = this.props.data;
    const graphStep = this.props.graphStep*1000;

    const maxTime = data.reduce((prev, i) => (prev > i.time ? prev : i.time), -Infinity);
    const minTime = data.reduce((prev, i) => (prev < i.time ? prev : i.time), Infinity);

    for (let x = Math.ceil(minTime / graphStep) * graphStep; x < maxTime + graphStep; x = x + graphStep) {

      let dataSubSet = data.filter((i) => (i.time >= (x - graphStep) && i.time < x));

      let highlighted = false;
      if (selectedNumber) {
        highlighted = selectedNumber.time >= (x - graphStep) && selectedNumber.time < x;
      }

      let position = null;
      if (highlighted && selectedNumber && dataSubSet.filter(i => i.number === selectedNumber.number).length) {
        position = dataSubSet.filter((i) => (i.time < selectedNumber.time)).length;
      }

      bars.push(
          <Bar position={position} key={x} title={humanize(x)} count={dataSubSet.length} highlighted={highlighted}/>
      );

    }

    return (<div>
      <h2>{this.props.title}</h2>
      {bars}
    </div>);
  }
}

