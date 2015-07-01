import React from 'react';

import classNames from 'classnames';

import css from './bar.css';

export default class Bar extends React.Component {
  render() {

    var cs = classNames({
      [css.bar] : true,
      [css.highlighted]: this.props.highlighted && this.props.position,
      [css.virtual]: this.props.highlighted && !this.props.position,
    });

    const info = this.props.position ? `${this.props.position}/${this.props.count}`: this.props.count;

    const styles = {
      height: this.props.height+'%',
      width: this.props.width+'%',
      marginRight: this.props.margin+'%'
    };

    return (
      <div style={styles} className={cs} data-title={this.props.title} data-info={info}/>
    );
  }
}
