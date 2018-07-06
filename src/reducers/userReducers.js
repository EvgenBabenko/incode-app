import userTypes from '../constants/userTypes';

const initialState = {
  isLogin: false,
  profile: {},
  isRequest: false,
  isEditProfile: false,
  userID: null,
  isAdmin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_REQUEST:
      return {
        ...state,
        isRequest: true,
      };
    case userTypes.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isRequest: false,
        isLogin: true,
        userID: action.user.id,
        isAdmin: action.user.role === 'admin'
      });
    case userTypes.REGISTER_FAILURE:
      return {
        ...state,
        ...initialState
      };
    case userTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isRequest: false,
        isLogin: true,
        userID: action.user.id,
        isAdmin: action.user.role === 'admin'
      });
    case userTypes.LOGIN_FAILURE:
      return {
        ...state,
        ...initialState
      };
    case userTypes.LOGOUT:
      return {
        ...state,
        ...initialState
      };
    case userTypes.LOAD_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        isRequest: false,
        isLogin: true,
        userID: action.data._id,
        profile: action.data.profile,
        isAdmin: action.data.role === 'admin'
      });
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
