import React from 'react';
import moment from 'moment';

import css from './details.css';

function pad(num, digits) {
  let str = num.toString();
  while (str.length < digits) {
    str = '0' + str;
  }
  return str;
}

export default class Details extends React.Component {
  render() {
    if (!this.props.number) {
      return (
          <div className={css.block}>
            <a href="https://data.3sport.org/vg-2015/events/426/results">забыли номер?</a>
          </div>
      );
    }

    const d = moment.duration(this.props.number.time)
    const humanTime = `${d.hours()}:${pad(d.minutes(),2)}:${pad(d.seconds(),2)}.${d.milliseconds()}`;

    return (
        <div className={css.block}>
          <div className={css.item}>{this.props.number.name}</div>
          <div className={css.item}>{humanTime}</div>
          <div className={css.item}>{this.props.number.category}</div>
          <div className={css.item}>Абс: {this.props.number.absPos}/{this.props.total}</div>
          <div className={css.item}>Пол: {this.props.number.sexPos}/{this.props.number.sexTotal}</div>
          <div className={css.item}>Кат: {this.props.number.categoryPos}/{this.props.number.categoryTotal}</div>
        </div>
    );
  }
}


