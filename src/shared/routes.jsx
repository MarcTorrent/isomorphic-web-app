import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import TodoDetail from './components/TodoDetail';

export default (
  <Route component={App} path="/">
    <Route component={TodoDetail} path=":id" />
  </Route>
);
