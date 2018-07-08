import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import history from '../helpers/history';
import Profile from '../containers/Profile';
import Dashboard from '../containers/Dashboard';
import TaskDetailsConainer from '../containers/TaskDetailsConainer';
import NotFound from './404';
import Register from '../containers/Register';
import Login from '../containers/Login';
import PrivateRoute from './PrivateRoute';

const Routing = () => (
  <ConnectedRouter history={history}>
    <React.Fragment>
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/task/:id" component={TaskDetailsConainer} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      {/* <Route component={NotFound} /> */}
    </React.Fragment>
  </ConnectedRouter>
);

export default Routing;
