import React from 'react';
import T from 'prop-types';

import Comments from '../containers/Comments';
import Dropdown from './Dropdown';

const TaskDetail = (props) => {
  const { taskDetails: { id, title, description, status }, changeTaskStatus } = props;
  console.log('task detail', props);

  return (
    <React.Fragment>
      <h2>
        {`ID: ${id}`}
      </h2>
      <p>
        {title}
      </p>
      <p>
        {description}
      </p>
      <Dropdown status={status} id={id} changeTaskStatus={changeTaskStatus} />
      <Comments />
    </React.Fragment>
  );
};

TaskDetail.propTypes = {
  taskDetails: T.objectOf(T.object).isRequired,
  changeTaskStatus: T.func.isRequired,
};

export default TaskDetail;
