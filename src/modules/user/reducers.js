import userTypes from './types';

const initialState = {
  userID: null,
  profile: null,
  isLogin: false,
  isEditProfile: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.LOAD_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case userTypes.UDPATE_PROFILE:
      return {
        ...state,
        profile: {
          ...state,
          profile: action.payload
        }
      };
    case userTypes.USER_LOGIN:
      return {
        ...state,
        isLogin: true,
        userID: action.id
      };
    case userTypes.USER_LOGOUT:
      return {
        ...state,
        isLogin: initialState.isLogin,
        userID: initialState.userID,
        profile: initialState.profile,
      };
    case userTypes.OPEN_EDIT_PROFILE:
      return {
        ...state,
        isEditProfile: true
      };
    case userTypes.CLOSE_EDIT_PROFILE:
      return {
        ...state,
        isEditProfile: initialState.isEditProfile,
      };
    default:
      return state;
  }
};
