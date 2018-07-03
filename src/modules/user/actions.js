import userTypes from './types';

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
