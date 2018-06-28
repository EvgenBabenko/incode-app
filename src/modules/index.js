import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import dashboard from './dashboard';
import comments from './comments';

export default combineReducers({
  user,
  dashboard,
  comments,
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
});
