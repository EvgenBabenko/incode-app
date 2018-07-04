import axios from 'axios';

import userTypes from '../constants/userTypes';
import history from '../helpers/history';


import config from '../config';

axios.defaults.baseURL = config.AXIOS_URL;

export const loadProfile = payload => ({
  type: userTypes.LOAD_PROFILE,
  payload,
});

export const updateProfile = payload => ({
  type: userTypes.UDPATE_PROFILE,
  payload,
});

export const userLogin = id => ({
  type: userTypes.USER_LOGIN,
  id
});

export const userLogout = () => ({
  type: userTypes.USER_LOGOUT,
});

export const openEditProfile = () => ({
  type: userTypes.OPEN_EDIT_PROFILE
});

export const closeEditProfile = () => ({
  type: userTypes.CLOSE_EDIT_PROFILE
});



// https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52
// http://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example



export const signin = payload => (dispatch) => {
  dispatch(userLogin());

  axios.post('/auth/register', { ...payload })
    .then((user) => {
      console.log(user);
      // login successful if there's a jwt token in the response
      if (user.data.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user.data));
      }

      history.push('/dashboard');

      return user;
    });
};




// export const login = (username, password) => (dispatch) => {
//   dispatch(request({ username }));

//   userService.login(username, password)
//     .then(
//       (user) => {
//         dispatch(success(user));
//         history.push('/');
//       },
//       (error) => {
//         dispatch(failure(error));
//         dispatch(alertActions.error(error));
//       }
//     );
// };

// function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
// function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
// function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
