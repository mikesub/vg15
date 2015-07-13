import React from 'react';

import classNames from 'classnames';

import css from './bar.css';

export default class Bar extends React.Component {
  render() {

    var cs = classNames({
      [css.bar] : true,
      [css.highlighted]: this.props.highlighted && this.props.position !== null,
      [css.virtual]: this.props.highlighted && this.props.position === null,
    });

    const info = (this.props.position !== null) ? `${this.props.position + 1}/${this.props.count}`: this.props.count;

    const styles = {
      height: this.props.height+'%',
      width: this.props.width+'%',
      marginRight: this.props.margin+'%',
      backgroundColor: this.props.color,
      zIndex: this.props.zIndex,
    };

    return (
      <div style={styles} className={cs} data-title={this.props.title} data-info={info}/>
    );
  }
}
