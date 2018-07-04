import commentTypes from '../constants/commentTypes';

const initialState = {
  commentList: [],
  isEditComment: false,
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case commentTypes.LOAD_COMMENTS:
      return {
        ...state,
        commentList: action.payload,
      };
    case commentTypes.ADD_COMMENT:
      return {
        ...state,
        commentList: state.commentList.concat(action.payload),
      };
    case commentTypes.UPDATE_COMMENT:
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
    case commentTypes.DELETE_COMMENT:
      return {
        ...state,
        commentList: state.commentList.filter(comment => comment.id !== action.id)
      };
    case commentTypes.OPEN_EDIT_COMMENT:
      return {
        ...state,
        isEditComment: true
      };
    case commentTypes.CLOSE_EDIT_COMMENT:
      return {
        ...state,
        isEditComment: initialState.isEditComment,
      };
    default:
      return state;
  }
};
