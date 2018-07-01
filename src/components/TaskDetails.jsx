import React from 'react';
import T from 'prop-types';

import Comments from '../containers/Comments';
import StatusDropdown from './Forms/StatusDropdown';

const TaskDetails = (props) => {
  const {
    taskDetails: {
      id, title, description, status
    }
  } = props;

  console.log('taskDetails', props);

  return (
    <React.Fragment>
      <h2>
        {`ID: ${id} - ${title.toUpperCase()}`}
      </h2>
      <p>
        {description}
      </p>
      <StatusDropdown id={id} status={status} {...props} />
      <Comments taskID={id} />
    </React.Fragment>
  );
};

TaskDetails.propTypes = {
  taskDetails: T.objectOf(T.string).isRequired
};

export default TaskDetails;
