import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Dashboard from './view/Dashboard/DashboardContainer';
import About from './view/About/About';

export default (
  <Route path="/">
    <IndexRoute component={Dashboard} />
    <Route path="about" component={About} />
  </Route>
);
