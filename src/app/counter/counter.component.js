import React, { Component } from 'react';

export default class CounterComponent extends Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired
  };

  static defaultProps = {
    count: 0
  };

  render() {
    return (
      <section>
        <span>{this.props.count}</span>
      </section>
    );
  }
}
