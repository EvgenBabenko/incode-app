import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import history from '../helpers/history';

import Profile from '../containers/Profile';
import Dashboard from '../containers/Dashboard';
import TaskDetailsConainer from '../containers/TaskDetailsConainer';
import NotFound from './NotFound';
import Login from './Login';
import Sigin from './Sigin';
import Fake from '../containers/Fake';

const Routing = () => (
  <React.Fragment>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Fake} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/:id" component={TaskDetailsConainer} />
        <Route exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </React.Fragment>
);

export default Routing;
