import userTypes from '../constants/userTypes';

const initialState = {
  isLogin: false,
  profile: null,
  isRequest: false,
  isEditProfile: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case userTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isLogin: true,
      };
    case userTypes.REGISTER_FAILURE:
      return {};
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isLogin: true,
      };
    case userTypes.LOGIN_FAILURE:
      return {};
    case userTypes.LOGOUT:
      return {};
    case userTypes.LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        isRequest: false,
        profile: action.user
      };
    case userTypes.LOAD_PROFILE_FAILURE:
      return {
        ...state,
        profile: null
      };
    case userTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isRequest: false,
        profile: action.user
      };
    case userTypes.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        profile: null
      };
    case userTypes.OPEN_EDIT_PROFILE:
      return {
        ...state,
        isEditProfile: true
      };
    case userTypes.CLOSE_EDIT_PROFILE:
      return {
        ...state,
        isEditProfile: false
      };
    default:
      return state;
  }
};
