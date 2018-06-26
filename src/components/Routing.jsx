import React from 'react';
import { Link, Route, Switch } from "react-router-dom"

import ProfileContainer from '../containers/ProfileContainer'
import ProfileEditContainer from '../containers/ProfileEditContainer'
import TaskList from '../components/TaskList'

export default () =>
    <React.Fragment>
        <nav>
            <Link to="/">Dashboard</Link>
            /
            <Link to="/profile">Profile</Link>
            /
            <Link to="/edit">Edit</Link>
        </nav>
        <Switch>
            <Route exact path="/" component={TaskList} />
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/edit" component={ProfileEditContainer} />
        </Switch>
    </React.Fragment>