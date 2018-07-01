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

  const { match: { params: { id: taskID } }, taskList, userID } = props;
  
  const taskdetails = getTaskDetails(taskID);

  console.log('TaskDetails', props, taskdetails);

  return (
    taskdetails
      ? <TaskDetails taskdetails={taskdetails} {...props} />
      : (
        <h1>
          Loading...
        </h1>
      )
  );
};

const mapStateToProps = state => ({
  userID: state.user.userID,
});

const mapDispatchToProps = dispatch => ({
  changeTaskStatus: (id, status) => dispatch(dashboardActions.changeTaskStatus(id, status)),
});

TaskDetailsContainer.propTypes = {
  getTaskDetails: T.func.isRequired,
  taskDetails: T.objectOf(T.object).isRequired,
  taskList: T.objectOf(T.object).isRequired,
  match: T.objectOf(T.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailsContainer);
