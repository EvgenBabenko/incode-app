import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"

import store from './modules/store';
import Layout from './components/Layout'

export default () =>
    <Provider store={store}>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </Provider>