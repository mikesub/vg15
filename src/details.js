import React from 'react';

import {humanCat, humanTime, translations} from './utils';

import details from './details.css';

export default class Details extends React.Component {
  render() {

    const link = (<div className={details.disclaimer}>
      Все данные взяты из&nbsp;официальной таблицы результатов на&nbsp;<a target="_blank" href="https://3sport.org/">3sport.org</a>.
      Номер можно посмотреть <a target="_blank" href="https://data.3sport.org/vg-2015/events/426/results">там&nbsp;же</a>.
    </div>);

    if (!this.props.number) {
      return <div className={details.block}>{link}</div>;
    }

    let arr = [
      [this.props.number.name, humanCat(this.props.number.category)],
    ];
    if (this.props.number['fail_reason'] !== null) {
      arr = arr.concat([
        [translations[`${this.props.number.category.substring(0, 1)}${this.props.number['fail_reason']}`], true],
      ]);
    } else {
      arr = arr.concat([
        ['Время', humanTime(this.props.number.time)],
        ['Абсолют', `${this.props.number.absPos}/${this.props.total}`],
        ['В категории', `${this.props.number.categoryPos}/${this.props.number.categoryTotal}`],
        ['Среди пола', `${this.props.number.sexPos}/${this.props.number.sexTotal}`],
        ['Время пред. финишера', this.props.number.prevTime && humanTime(this.props.number.prevTime)],
        ['Время след. финишера', this.props.number.nextTime && humanTime(this.props.number.nextTime)],
      ]);
    }

    return (
        <div className={details.wrap}>
          {arr.filter(i => i[1]).map(i => (
            <div className={details.block} key={i[0]}>
              <div className={details.item}>{i[0]}</div>
              <div className={details.value}>{i[1]}</div>
            </div>
          ))}
          {link}
        </div>
    );
  }
}


