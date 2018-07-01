import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import TaskDetails from '../components/TaskDetails';
import { dashboardActions } from '../modules/dashboard';
import * as mock from '../fixtures';

const TaskDetailsContainer = (props) => {
  function getTaskDetails(taskID) {
    return mock.task[taskID];
  }

  const { match: { params: { id: taskID } } } = props;

  const taskDetails = getTaskDetails(taskID);

  console.log('TaskDetails', props, taskDetails);

  return (
    taskDetails
      ? <TaskDetails taskDetails={taskDetails} {...props} />
      : (
        <h1>
          Loading...
        </h1>
      )
  );
};

const mapDispatchToProps = dispatch => ({
  changeTaskStatus: (id, status) => dispatch(dashboardActions.changeTaskStatus(id, status)),
});

TaskDetailsContainer.propTypes = {
  match: T.objectOf(T.object).isRequired,
  taskDetails: T.objectOf(T.string).isRequired,
  getTaskDetails: T.func,
};

TaskDetailsContainer.defaultProps = {
  getTaskDetails: undefined,
};

export default connect(undefined, mapDispatchToProps)(TaskDetailsContainer);
