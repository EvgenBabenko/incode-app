import React from 'react';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Avatar from '@material-ui/core/Avatar';

const Comment = ({ content }) => (
  <ListItem dense button>
    <Avatar />
    <ListItemText primary={content} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Comments">
        <CommentIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

Comment.propTypes = {
  content: T.string.isRequired
};

export default Comment;
