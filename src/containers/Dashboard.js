import React, { Component } from 'react';
import { connect } from 'react-redux'

import TaskList from '../components/TaskList'
import EmptyTaskList from '../components/EmptyTaskList'
import { dashboardActions } from '../modules/dashboard'

const TaskListWrapper = (props) => {

    return (
        props.dashboard.length
            ? <TaskList {...props} />
            : <EmptyTaskList />
    )
}

const mapStateToProps = (state) => ({
    dashboard: state.dashboard.tasks
})

const mapDispatchToProps = dispatch => ({
    deleteTask: id => dispatch(dashboardActions.deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskListWrapper)