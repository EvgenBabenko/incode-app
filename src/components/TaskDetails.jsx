import React from 'react';

import CommentList from './CommentList';

export default (props) => {
  const { taskDetails: { title, description } } = props;
  console.log(1, props);

  return (
    <React.Fragment>
      <h2>
        Task details will be here (title, description, comments)
      </h2>
      <p>{title}</p>
      <p>{description}</p>
      <CommentList />
    </React.Fragment>
  );
};
