import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import profile from './profile'

// export default profile

export default combineReducers({
    profile,
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
  })