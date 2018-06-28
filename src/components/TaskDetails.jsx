import React from 'react';

import Comments from '../containers/Comments';
import Dropdown from './Dropdown';

export default (props) => {

  const { taskDetails: { id, title, description, status }, changeTaskStatus } = props;
  console.log('task detail', props);

  return (
    <React.Fragment>
      <h2>
        ID: {id}
      </h2>
      <p>{title}</p>
      <p>{description}</p>
      <Dropdown status={status} id={id} changeTaskStatus={changeTaskStatus} />
      <Comments />
    </React.Fragment>
  );
};
