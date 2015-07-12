import React from 'react';
import moment from 'moment';

import Bar from './bar.js';
import {heatmap} from './heatmap.js';

const humanize = function (x) {
  var t = moment.duration(x);
  return t.hours() + 'ч' + t.minutes();
};

const getWidthPercentage = function (barsNumber, marginPart) {
  return 1/(barsNumber + barsNumber * marginPart - marginPart)*100;
};

import css from './bar.css';

export default class BaseGraph extends React.Component {

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

      bars.push({
        key: x,
        title: humanize(x),
        highlighted: highlighted,
        position: position,
        count: dataSubSet.length
      });

    }

    const maxCount = bars.reduce((prev, i) => (prev > i.count ? prev : i.count), -Infinity);

    bars = bars.map(i => Object.assign(i, { height: i.count / maxCount * 100}));

    const marginPart = 0.1;
    const width = getWidthPercentage(bars.length, marginPart);
    const margin = width * marginPart;

    const centerIndex = bars.map((v, i) => [i, v.count]).filter((i) => i[1] === maxCount)[0][0];
    const colors = heatmap(bars.length, centerIndex);

    return (
      <div className={css.wrap}>
        <div className={css.title}>{this.props.title}</div>
        {bars.map((v, i, a) => (<Bar
                            key={v.key}
                            title={v.title}
                            highlighted={v.highlighted}
                            height={v.height}
                            width={width}
                            margin={a.length - 1 === i ? 0 : margin}
                            position={v.position}
                            count={v.count}
                            color={colors[i]}
                            zIndex={bars.length - i + 1}
                          />))}
      </div>
    );
  }
}
