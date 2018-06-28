import { userTypes } from '.';

const loadProfile = payload => ({
  type: userTypes.LOAD_PROFILE,
  payload,
});

const editProfile = payload => ({
  type: userTypes.EDIT_PROFILE,
  payload,
});

const userLogin = () => ({
  type: userTypes.USER_LOGIN,
});

const userLogout = () => ({
  type: userTypes.USER_LOGOUT,
});

export default {
  loadProfile,
  editProfile,
  userLogin,
  userLogout,
};
