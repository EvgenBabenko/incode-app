import React from 'react';
import { Provider } from 'react-redux'

import logo from './logo.svg';
import store from './modules/store';
import './App.css';
import ProfileContainer from './containers/ProfileContainer'

export default () =>
    <Provider store={store}>
        <ProfileContainer />
    </Provider>