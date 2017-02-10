import React from 'react';
import { Router, browserHistory } from 'react-router';

export const getRoutes = () => ({
  childRoutes: [
    {
      path: '/',
      component: require('./app.component').AppComponent
    }
  ],
  indexRoute: {
    component: require('./app.component').AppComponent
  }
});

export default () => (
  <Router
    history={browserHistory}
    routes={getRoutes()}
  />
);
