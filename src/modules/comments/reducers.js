import commentsTypes from './types';

const initialState = {
  commentList: [],
  isEditComment: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case commentsTypes.LOAD_COMMENTS:
      return {
        ...state,
        commentList: action.payload,
      };
    case commentsTypes.ADD_COMMENT:
      return {
        ...state,
        commentList: state.commentList.concat(action.payload),
      };
    case commentsTypes.UPDATE_COMMENT:
      return {
        ...state,
        commentList: state.commentList.map(comment => (
          comment.id === action.id
            ? {
              ...comment,
              content: action.payload.content,
            }
            : comment)),
      };
    case commentsTypes.DELETE_COMMENT:
      return {
        ...state,
        commentList: state.commentList.filter(comment => comment.id !== action.id)
      };
    case commentsTypes.OPEN_EDIT_COMMENT:
      return {
        ...state,
        isEditComment: true
      };
    case commentsTypes.CLOSE_EDIT_COMMENT:
      return {
        ...state,
        isEditComment: initialState.isEditComment,
      };
    default:
      return state;
  }
};
