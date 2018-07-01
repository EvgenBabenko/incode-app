import commentsTypes from './types';

const newComment = () => ({
  id: Date.now(),
  date: Date.now(),
});

const loadComments = payload => ({
  type: commentsTypes.LOAD_COMMENTS,
  payload,
});

const addComment = payload => ({
  type: commentsTypes.ADD_COMMENT,
  payload,
});

const updateComment = (id, payload) => ({
  type: commentsTypes.UPDATE_COMMENT,
  id,
  payload,
});

const deleteComment = id => ({
  type: commentsTypes.DELETE_COMMENT,
  id,
});

const openEditComment = () => ({
  type: commentsTypes.OPEN_EDIT_COMMENT
});

const closeEditComment = () => ({
  type: commentsTypes.CLOSE_EDIT_COMMENT
});

export default {
  loadComments,
  addComment,
  updateComment,
  deleteComment,
  openEditComment,
  closeEditComment,
};
