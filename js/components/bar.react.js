import React from 'react';

import classNames from 'classnames';

export default class extends React.Component {
  render() {

    var cs = classNames({
      'bar-bar': true,
      'highlighted': this.props.highlighted
    });

    const title = this.props.position ? `${this.props.position}/${this.props.count}`: this.props.count;

    return (
      <div className="bar">
        <div className="bar-title">&lt;{this.props.title}</div>
        <div className={cs} style={{width: this.props.count}}>
          <div className="bar-bar-title" style={{left: this.props.count+5}}>
            {title}
          </div>
        </div>
      </div>
    );
  }
}
