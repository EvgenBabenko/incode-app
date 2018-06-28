import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskDetails from '../components/TaskDetails';
// import fixtures from '../fixtures.json';
import { dashboardActions } from '../modules/dashboard';

const TaskDetailContainer = (props) => {
  const { match: { params: { id } }, getTaskDetails, taskDetails } = props;

  console.log(id);

  getTaskDetails(parseInt(id, 10));
  
  // const taskItem = props.taskList[props.activeTaskIndex]

  return (
    taskDetails
      ? <TaskDetails {...props} />
      : <h1>Loading...</h1> 
    
  );
};

const mapStateToProps = state => ({
  taskDetails: state.dashboard.taskDetails,
});

const mapDispatchToProps = dispatch => ({
  getTaskDetails: id => dispatch(dashboardActions.getTaskDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailContainer);
