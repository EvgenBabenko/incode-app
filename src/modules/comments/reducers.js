import { commentsTypes } from '.';

const defaultState = {
  commentList: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case commentsTypes.LOAD_COMMENTS:
      return {
        ...state,
        commentList: action.payload,
      };
    default:
      return state;
  }
};
