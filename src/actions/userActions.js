import userTypes from '../constants/userTypes';
import services from '../services';
import history from '../helpers/history';

const userRequest = () => ({ type: userTypes.USER_REQUEST });
const loadProfileSuccess = data => ({ type: userTypes.LOAD_PROFILE_SUCCESS, data });
const loadProfileFailure = () => ({ type: userTypes.LOAD_PROFILE_FAILURE });

export const me = () => (dispatch) => {
  dispatch(userRequest());

  services.userService.me()
    .then(
      data => dispatch(loadProfileSuccess(data)),
      error => dispatch(loadProfileFailure()),
    );
};

const updateProfileSuccess = profile => ({ type: userTypes.UPDATE_PROFILE_SUCCESS, profile });
const updateProfileFailure = () => ({ type: userTypes.UPDATE_PROFILE_FAILURE });

export const updateProfile = (id, payload) => (dispatch) => {
  dispatch(userRequest());

  services.userService.updateProfile(id, payload)
    .then(() => dispatch(me()));
  // .then(data => dispatch(updateProfileSuccess(data)));
};

export const openEditProfile = () => ({ type: userTypes.OPEN_EDIT_PROFILE });

export const closeEditProfile = () => ({ type: userTypes.CLOSE_EDIT_PROFILE });

const registerSuccess = user => ({ type: userTypes.REGISTER_SUCCESS, user });
const registerFailure = () => ({ type: userTypes.REGISTER_FAILURE });

export const register = payload => (dispatch) => {
  dispatch(userRequest());

  services.userService.register(payload)
    .then(
      (data) => {
        dispatch(registerSuccess(data.data));
        history.push('/');
      },
      (error) => {
        dispatch(registerFailure());
        history.push('/');
      },
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
        dispatch(loginSuccess(data.data));
        history.push('/');
      },
      (error) => {
        dispatch(loginFailure());
        history.push('/');
      },
    );
};
