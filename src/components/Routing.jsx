import React from 'react';
import { Link, Route, Switch } from "react-router-dom"

import ProfileContainer from '../containers/ProfileContainer'
import ProfileEditContainer from '../containers/ProfileEditContainer'
import Tasks from '../components/Tasks'

export default () =>
    <React.Fragment>
        <nav>
            <Link to="/">Home</Link>
            /
            <Link to="/profile">Profile</Link>
            /
            <Link to="/edit">Edit</Link>
        </nav>
        <Switch>
            <Route exact path="/" component={Tasks} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/edit" component={ProfileEditContainer} />
        </Switch>
    </React.Fragment>