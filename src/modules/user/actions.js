import userTypes from './types';

const loadProfile = payload => ({
  type: userTypes.LOAD_PROFILE,
  payload,
});

const updateProfile = payload => ({
  type: userTypes.UDPATE_PROFILE,
  payload,
});

const userLogin = id => ({
  type: userTypes.USER_LOGIN,
  id
});

const userLogout = () => ({
  type: userTypes.USER_LOGOUT,
});

const openEditProfile = () => ({
  type: userTypes.OPEN_EDIT_PROFILE
});

const closeEditProfile = () => ({
  type: userTypes.CLOSE_EDIT_PROFILE
});

export default {
  loadProfile,
  updateProfile,
  userLogin,
  userLogout,
  openEditProfile,
  closeEditProfile,
};
