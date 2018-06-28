import { userTypes } from './';

const defaultState = {
  profile: null,
  isLogin: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case userTypes.LOAD_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case userTypes.EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case userTypes.USER_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case userTypes.USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};
