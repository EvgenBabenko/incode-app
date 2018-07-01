import React from 'react';
import T from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import { withStyles } from '@material-ui/core/styles';

import AddNew from './AddNew';
import CommentForm from './Forms/CommentForm';

const styles = {
  root: {
    display: 'flex'
  },
};

const Comment = (props) => {
  const { content, addComment, id, deleteComment, submitCallback, openEditComment, closeEditComment, classes } = props;

  function submit(values) {
    console.log(values);
    submitCallback(values, id);
  }

  return (
    <ListItem dense button>
      <Avatar />
      <ListItemText primary={content} />
      <ListItemSecondaryAction className={classes.root}>
        {/* <IconButton aria-label="Comments">
          <CommentIcon />
        </IconButton> */}
        <AddNew title="Edit comment" edit {...props} openEdit={openEditComment} closeEdit={closeEditComment}>
          <CommentForm onSubmit={submit} {...props} />
        </AddNew>
        {/* <Button variant="fab" color="secondary" aria-label="edit" mini>
          <EditIcon />
        </Button> */}
        <Button onClick={() => deleteComment(id)} variant="fab" aria-label="delete" mini>
          <DeleteIcon />
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

Comment.propTypes = {
  content: T.string.isRequired
};

export default withStyles(styles)(Comment);
