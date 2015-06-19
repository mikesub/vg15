import React from 'react';

import classNames from 'classnames';

export default class extends React.Component {
  render() {

    var cs = classNames({
      'bar-bar': true,
      'highlighted': this.props.highlighted
    });

    return (
      <div className="bar">
        <div className="bar-title">&lt;{this.props.title}</div>
        <div className={cs} style={{width: this.props.count}}>
          <div className="bar-bar-title" style={{left: this.props.count+5}}>
            {this.props.count}
          </div>
        </div>
      </div>
    );
  }
}
