import React from 'react';
import { Route, Switch } from "react-router-dom"

import ProfileContainer from '../containers/ProfileContainer'
import ProfileEditContainer from '../containers/ProfileEditContainer'
import Dashboard from '../containers/Dashboard'

export default () =>
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/edit" component={ProfileEditContainer} />
        </Switch>
    </React.Fragment>