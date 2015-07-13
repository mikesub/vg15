import React from 'react';

import {humanTime} from './utils.js';

export default class OverallStats extends React.Component {
  render() {
    const sorted = this.props.data.filter(i => i.time).sort((a,b) => a.time - b.time);
    return (<div>
      <div>TODO:</div>
      <div>всего заявок: {this.props.data.length}</div>
      <div>мужчин: {this.props.data.filter(i => i.category.substring(0,1) === 'M').length}</div>
      <div>женщин: {this.props.data.filter(i => i.category.substring(0,1) === 'F').length}</div>
      <hr/>
      <div>финишёров: {this.props.data.filter(i => i.time).length}</div>
      <div>мужчин: {this.props.data.filter(i => i.time).filter(i => i.category.substring(0,1) === 'M').length}</div>
      <div>женщин: {this.props.data.filter(i => i.time).filter(i => i.category.substring(0,1) === 'F').length}</div>
      <hr/>
      <div>не стартовали: {this.props.data.filter(i => i['fail_reason'] === 'DNS').length}</div>
      <div>мужчин: {this.props.data.filter(i => i['fail_reason'] === 'DNS').filter(i => i.category.substring(0,1) === 'M').length}</div>
      <div>женщин: {this.props.data.filter(i => i['fail_reason'] === 'DNS').filter(i => i.category.substring(0,1) === 'F').length}</div>
      <hr/>
      <div>не финишировали: {this.props.data.filter(i => i['fail_reason'] === 'DNF').length}</div>
      <div>мужчин: {this.props.data.filter(i => i['fail_reason'] === 'DNF').filter(i => i.category.substring(0,1) === 'M').length}</div>
      <div>женщин: {this.props.data.filter(i => i['fail_reason'] === 'DNF').filter(i => i.category.substring(0,1) === 'F').length}</div>
      <hr/>
      <div>первый: {humanTime(sorted[0].time)}</div>
      <div>медиана: {humanTime(sorted[Math.floor(sorted.length/2)].time)}</div>
      <div>последний: {humanTime(sorted[sorted.length-1].time)}</div>
      <hr/>
      <div>график по категориям (на каждый пол) (кол-во участников)</div>
      <div>список категорий отсортированных по времени ? (или график с удельным временем категории)</div>

      <hr/>
    </div>);
  }
}
