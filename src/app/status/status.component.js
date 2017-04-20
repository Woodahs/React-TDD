import React, { Component } from 'react';
import * as statusTypes from '../redux/socket/status-types.enum';

export default class StatusComponent extends Component {
  static propTypes = {
    status: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    status: statusTypes.NOT_CONNECTED
  };

  render() {
    const status = {
      [statusTypes.NOT_CONNECTED]: "Not Connected",
      [statusTypes.CONNECTING]: "Connecting",
      [statusTypes.CONNECTED]: "Connected",
    };

    return (
      <section>
        <p>{status[this.props.status]}</p>
      </section>
    );
  }
}
