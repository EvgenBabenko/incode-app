import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import TaskDetails from '../components/TaskDetails';

// import { dashboardActions } from '../modules/dashboard';
import * as dashboardActionCreators from '../actions/dashboardActions';
import * as mock from '../fixtures';

class TaskDetailsContainer extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(dashboardActionCreators, dispatch);

    // const { match: { params: { id: taskID } } } = props;

    // this.taskDetails = mock.task[taskID];

    // console.log('TaskDetails', props, this.taskDetails);

    // this.getTaskDetails = this.getTaskDetails(taskID);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    console.log('sdrtfesdrtf', id, this.props);

    const { dispatch } = this.props;

    const fetchTask = dashboardActionCreators.fetchTask(id);
    dispatch(fetchTask);
  }

  render() {
    const { taskDetails } = this.props;

    return (
      taskDetails
        ? <TaskDetails {...this.props} {...this.boundActionCreators} />
        : (
          <h1>
            Loading...
          </h1>
        )
    );
  }
}

const mapStateToProps = state => ({
  taskDetails: state.dashboard.taskDetails,
});

// const mapDispatchToProps = dispatch => ({
//   changeTaskStatus: (id, status) => dispatch(dashboardActions.changeTaskStatus(id, status)),
// });

TaskDetailsContainer.propTypes = {
  match: T.objectOf(T.object).isRequired,
  taskDetails: T.objectOf(T.string).isRequired,
  getTaskDetails: T.func,
};

TaskDetailsContainer.defaultProps = {
  getTaskDetails: undefined,
};

export default connect(mapStateToProps)(TaskDetailsContainer);
