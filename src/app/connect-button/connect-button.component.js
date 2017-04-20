import React, {Component} from 'react';
import * as statusTypes from '../redux/socket/status-types.enum';

export default class ConnectButtonComponent extends Component {
  static propTypes = {
    connect: React.PropTypes.func.isRequired,
    isVisible: React.PropTypes.bool.isRequired
  };

  static defaultProps = {
    isVisible: true
  };

  render() {
    if (!this.props.isVisible) {
      return null;
    }

    return (
      <button onClick={this.props.connect}>Connect</button>
    );
  }
}
