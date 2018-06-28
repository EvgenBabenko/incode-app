import React from 'react';

import List from '@material-ui/core/List';

import Comment from './Comment';

export default (props) => {
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
