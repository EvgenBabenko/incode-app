import userTypes from '../constants/userTypes';
import services from '../services';
import history from '../helpers/history';

const userRequest = () => ({ type: userTypes.USER_REQUEST });
const loadProfileSuccess = profile => ({ type: userTypes.LOAD_PROFILE_SUCCESS, profile });
const loadProfileFailure = () => ({ type: userTypes.LOAD_PROFILE_FAILURE });

export const me = () => (dispatch) => {
  dispatch(userRequest());

  services.userService.me()
    .then(
      data => dispatch(loadProfileSuccess(data)),
      error => dispatch(loadProfileFailure())
    );
};

const updateProfileSuccess = profile => ({ type: userTypes.UPDATE_PROFILE_SUCCESS, profile });
const updateProfileFailure = () => ({ type: userTypes.UPDATE_PROFILE_FAILURE });

export const updateProfile = () => {
  // need write request to server
};

export const openEditProfile = () => ({ type: userTypes.OPEN_EDIT_PROFILE });

export const closeEditProfile = () => ({ type: userTypes.CLOSE_EDIT_PROFILE });

// https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52
// http://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example

const registerSuccess = user => ({ type: userTypes.REGISTER_SUCCESS, user });
const registerFailure = () => ({ type: userTypes.REGISTER_FAILURE });

export const register = payload => (dispatch) => {
  dispatch(userRequest());

  services.userService.register(payload)
    .then(
      (data) => {
        dispatch(registerSuccess(data.data.id));
        history.push('/');
      },
      (error) => {
        dispatch(registerFailure());
        history.push('/');
      }
    );
};

export const logout = () => {
  services.userService.logout();

  return { type: userTypes.LOGOUT };
};

const loginSuccess = user => ({ type: userTypes.LOGIN_SUCCESS, user });
const loginFailure = () => ({ type: userTypes.LOGIN_FAILURE });

export const login = payload => (dispatch) => {
  dispatch(userRequest());

  services.userService.login(payload)
    .then(
      (data) => {
        dispatch(loginSuccess(data.data.id));
        history.push('/');
        console.log('login',data.data.id);
      },
      (error) => {
        dispatch(loginFailure());
        history.push('/');
      }
    );
};
