import React from 'react';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Task from './Task';

const styles = {
  taskList: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'start',
  },
};

const TaskList = (props) => {
  const { classes, taskList } = props;

  return (
    <div className={classes.root}>
      <List component="div" className={classes.taskList}>
        {taskList.map(task => <Task key={task.id} {...task} {...props} />)}
      </List>
    </div>
  );
};

TaskList.propTypes = {
  taskList: T.arrayOf(T.object).isRequired,
  classes: T.objectOf(T.object)
};

TaskList.defaultProps = {
  classes: null
};

export default withStyles(styles)(TaskList);
