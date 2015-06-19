import React from 'react';
import moment from 'moment';

import Bar from './bar.react.js';

export default class extends React.Component {

  render() {
    var bars = [];
    const selectedNumber = this.props.selectedNumber;
    const data = this.props.data;
    const graphStep = this.props.graphStep;

    const maxTime = data.reduce((prev, i) => (prev > i.time_secs ? prev : i.time_secs), -Infinity);
    const minTime = data.reduce((prev, i) => (prev < i.time_secs ? prev : i.time_secs), Infinity);

    const humanize = function (x) {
      var t = moment.duration(x * 1000);
      return t.hours() + 'h' + t.minutes() + 'm';
    };

    for (let x = Math.ceil(minTime / graphStep) * graphStep; x < maxTime + graphStep; x = x + graphStep) {
      let dataSubSet = data.filter((i) => (i.time_secs > (x - graphStep) && i.time_secs < x));
      let highlighted = false;
      if (selectedNumber) {
        highlighted = selectedNumber.time_secs > (x - graphStep) && selectedNumber.time_secs < x;
      }
      bars.push(
        <Bar key={x} title={humanize(x)} count={dataSubSet.length} highlighted={highlighted}/>
      );
    }

    return <div>{bars}</div>;
  }
}

