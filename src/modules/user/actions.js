import { userTypes } from '.';

const loadProfile = profile => ({
  type: userTypes.LOAD_PROFILE,
  profile,
});

const editProfile = profile => ({
  type: userTypes.EDIT_PROFILE,
  profile,
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
