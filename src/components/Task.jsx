import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import StatusDropdown from './Forms/StatusDropdown';
import TaskForm from './Forms/TaskForm';
import Controls from './Controls';

const styles = theme => ({
  // task: {
  //   width: 200,
  // },
  action: {
    display: 'none',
    '&:hover': {
      display: 'inlineFlex'
    }
  },
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

const Task = (props) => {
  const {
    title, description, classes, _id, deleteTask, submitCallback, openEditTask, closeEditTask
  } = props;

  console.log('task', props);

  function submit(values) {
    console.log(values);
    submitCallback(values, _id);
  }

  return (
    <ListItem
      button
      className={classes.task}
    >

      <Link to={`/task/${_id}`} className="task-link">
        <Card className={classes.card}>
          <CardHeader title={title} component="h2" />

          <CardContent>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>

        </Card>
      </Link>

      <ListItemSecondaryAction>
        <Controls {...props} title="Edit task" openEdit={openEditTask} closeEdit={closeEditTask} deleteItem={deleteTask}>
          <TaskForm onSubmit={submit} {...props} />
        </Controls>
        <StatusDropdown {...props} />
      </ListItemSecondaryAction>

    </ListItem>
  );
};

Task.propTypes = {
  title: T.string.isRequired,
  id: T.number.isRequired,
  deleteTask: T.func.isRequired,
  submitCallback: T.func.isRequired,
  openEditTask: T.func.isRequired,
  closeEditTask: T.func.isRequired,
  classes: T.objectOf(T.string).isRequired,
  description: T.string,
};

Task.defaultProps = {
  description: '',
};

export default withStyles(styles)(Task);
