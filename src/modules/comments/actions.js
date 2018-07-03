import commentsTypes from './types';

const newComment = payload => ({
  id: Date.now(),
  content: payload.content,
  createdAt: Date.now(),
  updatetAt: Date.now(),
  createdByID: payload.userID,
  taskID: payload.taskID,
});

export const loadComments = payload => ({
  type: commentsTypes.LOAD_COMMENTS,
  payload,
});

export const addComment = payload => ({
  type: commentsTypes.ADD_COMMENT,
  payload: newComment(payload),
});

export const updateComment = (id, payload) => ({
  type: commentsTypes.UPDATE_COMMENT,
  id,
  payload,
});

export const deleteComment = id => ({
  type: commentsTypes.DELETE_COMMENT,
  id,
});

export const openEditComment = () => ({
  type: commentsTypes.OPEN_EDIT_COMMENT
});

export const closeEditComment = () => ({
  type: commentsTypes.CLOSE_EDIT_COMMENT
});
