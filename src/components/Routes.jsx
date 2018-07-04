import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import history from '../helpers/history';
import Profile from '../containers/Profile';
import Dashboard from '../containers/Dashboard';
import TaskDetailsConainer from '../containers/TaskDetailsConainer';
import NotFound from './NotFound';
// import Login from './Login';
// import Sigin from './Sigin';
import FakeRegister from '../containers/FakeRegister';
// import FakeLogin from '../containers/FakeRegister';
import PrivateRoute from './PrivateRoute';

const Routing = () => (
  <React.Fragment>
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/task/:id" component={TaskDetailsConainer} />
        <Route path="/login" component={FakeRegister} />
        {/* <Route path="/register" component={FakeAuth} /> */}
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </React.Fragment>
);

export default Routing;
