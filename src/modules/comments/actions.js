import { commentsTypes } from '.';

const loadComments = payload => ({
  type: commentsTypes.LOAD_COMMENTS,
  payload,
});

export default {
  loadComments,
};
