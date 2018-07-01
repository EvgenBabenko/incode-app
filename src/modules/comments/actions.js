import commentsTypes from './types';

const newComment = payload => ({
  id: Date.now(),
  content: payload.content,
  createdAt: Date.now(),
  updatetAt: Date.now(),
  createdByID: payload.userID,
  taskID: payload.taskID,
});

const loadComments = payload => ({
  type: commentsTypes.LOAD_COMMENTS,
  payload,
});

const addComment = payload => ({
  type: commentsTypes.ADD_COMMENT,
  payload: newComment(payload),
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
