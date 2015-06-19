import React from 'react';

export default class extends React.Component {
  render() {
    if (!this.props.number) {
      return null;
    }
    return (
      <dl>
        <dt>number</dt>
        <dd>{this.props.number.number}</dd>
        <dt>name</dt>
        <dd>{this.props.number.name}</dd>
        <dt>time</dt>
        <dd>{this.props.number.time}</dd>
        <dt>category</dt>
        <dd>{this.props.number.category}</dd>
        <dt>sex position</dt>
        <dd>{this.props.number.sex}</dd>
        <dt>category position</dt>
        <dd>{this.props.number.cat}</dd>
        <dt>abs position</dt>
        <dd>{this.props.number.abs}</dd>
      </dl>
    );
  }
}


