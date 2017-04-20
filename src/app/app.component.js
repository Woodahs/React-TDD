import React, {Component} from 'react';

import CounterComponent from './counter/counter.container';
import StatusComponent from './status/status.container';
import ConnectButton from './connect-button/connect-button.container';
import './styles/main.css';

export class AppComponent extends Component {
  render() {
    return (
      <main>
        <CounterComponent />
        <ConnectButton />
        <StatusComponent />
      </main>
    );
  }
}

AppComponent.propTypes = {};
