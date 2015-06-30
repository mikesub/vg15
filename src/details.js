import React from 'react';

export default class Details extends React.Component {
  render() {
    if (!this.props.number) {
      return null;
    }

    return (
      <div>
        {this.props.number.name}<br/>
      </div>
    );
  }
}


