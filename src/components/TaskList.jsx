import React from 'react';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import DoneIcon from '@material-ui/icons/Done';

import Task from './Task';
import NoItems from './NoItems';
import AddNew from './AddNew';
import TaskForm from './Forms/TaskForm';

const styles = {
  // taskList: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   alignItems: 'start',
  // },
};

const TaskList = (props) => {
  const { classes, taskList, submitCallback } = props;

  function submit(values) {
    console.log(values);
    submitCallback(values);
  }

  return (
    <React.Fragment>
      <AddNew title="New task">
        <TaskForm onSubmit={submit} {...props} />
      </AddNew>

      {taskList.length
        ? (
          <div className={classes.root}>

            <List component="div" className={classes.taskList}>
              {taskList.map(task => <Task key={task.id} {...task} {...props} />)}
            </List>
          </div>
        )
        : (
          <NoItems text="No tasks for now">
            {<DoneIcon />}
          </NoItems>
        )
      }
    </React.Fragment>

  );
};

TaskList.propTypes = {
  taskList: T.arrayOf(T.object).isRequired,
  submitCallback: T.func.isRequired,
  classes: T.objectOf(T.string).isRequired,
};

export default withStyles(styles)(TaskList);
