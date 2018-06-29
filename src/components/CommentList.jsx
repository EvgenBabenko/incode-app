import React from 'react';
import T from 'prop-types';

import List from '@material-ui/core/List';

import Comment from './Comment';

const CommentList = (props) => {
  const { commentList } = props;
  console.log(1, props);

  return (
    <React.Fragment>
      <h2>
        Comments
      </h2>
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
