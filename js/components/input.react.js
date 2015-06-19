import React from 'react';
import { selectNumber } from '../store.js';

export default class extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    selectNumber(Number(React.findDOMNode(this.refs.number).value));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" placeholder="enter number here" pattern="\d+" ref="number" />
      </form>
    )
  }
}
