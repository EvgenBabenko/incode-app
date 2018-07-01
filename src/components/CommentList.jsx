import React from 'react';
import T from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Comment from './Comment';
// import AddComment from '../containers/AddComment';
import AddNew from './AddNew';
import CommentForm from './Forms/CommentForm';

const CommentList = (props) => {
  const { commentList, submitCallback } = props;
  console.log(1, props);

  function submit(values) {
    console.log(values);
    submitCallback(values);
  }

  return (
    <React.Fragment>
      <h2>
        Comments
      </h2>
      <AddNew title="New comment">
        <CommentForm onSubmit={submit} {...props} />
      </AddNew>
      <List>
        {commentList.map(comment => <Comment key={comment.id} {...comment} {...props} />)}
      </List>
    </React.Fragment>
  );
};

CommentList.propTypes = {
  commentList: T.arrayOf(T.object).isRequired
};

export default CommentList;
