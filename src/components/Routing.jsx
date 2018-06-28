import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Profile from '../containers/Profile';
import Dashboard from '../containers/Dashboard';
import TaskDetailsConainer from '../containers/TaskDetailsConainer';

export default () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/task/:id" component={TaskDetailsConainer} />
    </Switch>
  </React.Fragment>
);
