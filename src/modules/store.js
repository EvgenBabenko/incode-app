import { createStore } from 'redux'

import reducer from './'

export default createStore(
    reducer,
    undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)