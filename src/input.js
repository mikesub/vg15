import React from 'react';
import { selectNumber } from './store.js';

import css from './input.css';

export default class Input extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    selectNumber(Number(React.findDOMNode(this.refs.number).value));
  }

  clear() {
    React.findDOMNode(this.refs.number).value = '';
    selectNumber();
  }

  renderClear() {
    if (!this.props.number) {
      return null;
    }

    return <span className={css.clear} onClick={this.clear.bind(this)}>&times;</span>;
  }

  render() {
    return (
      <form className={css.wrap} onSubmit={this.onSubmit.bind(this)}>
        <input
          className={css.input}
          type="text"
          defaultValue={this.props.number ? this.props.number.number : null}
          placeholder="номер участника"
          pattern="\d+"
          ref="number"
        />
        {this.renderClear()}
      </form>
    )
  }

}
