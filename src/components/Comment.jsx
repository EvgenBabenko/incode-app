import React from 'react';
import T from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import CommentForm from './Forms/CommentForm';
import Controls from './Controls';

const Comment = (props) => {
  const {
    content, id, createdAt, deleteComment, submitCallback, openEditComment, closeEditComment, classes
  } = props;

  function submit(values) {
    console.log(values);

    submitCallback(values, id);
  }

  return (
    <ListItem button>
      {/* <Avatar /> */}
      <ListItemText primary={content} secondary={createdAt} />
      <ListItemSecondaryAction>
        <Controls {...props} title="Edit comment" openEdit={openEditComment} closeEdit={closeEditComment} deleteItem={deleteComment}>
          <CommentForm onSubmit={submit} {...props} />
        </Controls>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

Comment.propTypes = {
  content: T.string.isRequired,
  id: T.number.isRequired,
  createdAt: T.string.isRequired,
  submitCallback: T.func.isRequired,
  openEditComment: T.func.isRequired,
  closeEditComment: T.func.isRequired,
  classes: T.objectOf(T.string).isRequired,
  deleteComment: T.func.isRequired,
};

export default Comment;
