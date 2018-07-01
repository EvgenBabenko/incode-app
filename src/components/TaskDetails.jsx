import React from 'react';
import T from 'prop-types';

import Comments from '../containers/Comments';
import StatusDropdown from './Forms/StatusDropdown';

const TaskDetails = (props) => {
  const {
    taskdetails: {
      id, title, description, status
    }
  } = props;

  console.log('taskDetail', props)

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
      <StatusDropdown id={id} status={status} {...props} />
      <Comments taskID={id} />
    </React.Fragment>
  );
};

TaskDetails.propTypes = {
  taskdetails: T.objectOf(T.object).isRequired,
  changeTaskStatus: T.func.isRequired,
};

export default TaskDetails;
