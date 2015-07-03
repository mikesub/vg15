import React from 'react';
import { selectNumber } from './store.js';

import css from './input.css';

export default class Input extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    selectNumber(Number(React.findDOMNode(this.refs.number).value));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input className={css.input} type="text" defaultValue={this.props.number ? this.props.number.number : null} placeholder="номер участника" pattern="\d+" ref="number"/>
      </form>
    )
  }
}
