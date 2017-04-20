import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import appReducer from './app/app.reducer';
import socketMiddleware from './app/middleware/socket.middleware';
import { AppComponent } from './app/app.component';

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(socketMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <AppComponent/>
  </Provider>,
  document.getElementById('root')
);
