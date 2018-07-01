import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';

import StatusDropdown from './Forms/StatusDropdown';
// import AddTask from './Forms/AddTask';
import AddNew from './AddNew';
import TaskForm from './Forms/TaskForm';


const styles = theme => ({
  task: {
    width: 200,
  },
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
    title, description, classes, id, deleteTask, submitCallback, openEditTask, closeEditTask
  } = props;

  console.log('task', props)

  function submit(values) {
    console.log(values);
    submitCallback(values, id);
  }

  return (
    <ListItem
      button
      className={classes.task}
    >

      <Link to={`/task/${id}`} className="task-link">
        <Card className={classes.card}>

          <CardHeader
            title={title}
            component="h2"
          />

          <CardContent>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>

        </Card>
      </Link>

      <ListItemSecondaryAction>
        {/* <AddTask {...props} /> */}
        <AddNew title="Edit task" edit {...props} openEdit={openEditTask} closeEdit={closeEditTask}>
          <TaskForm onSubmit={submit} {...props} />
        </AddNew>
        {/* <Button variant="fab" color="secondary" aria-label="edit" className={classes.button} mini>
          <EditIcon />
        </Button> */}
        <Button onClick={() => deleteTask(id)} variant="fab" aria-label="delete" className={classes.button} mini>
          <DeleteIcon />
        </Button>
        <StatusDropdown {...props} />
      </ListItemSecondaryAction>

    </ListItem>
  );
};

Task.propTypes = {
  title: T.string.isRequired,
  id: T.number.isRequired,
  deleteTask: T.func.isRequired,
  classes: T.objectOf(T.object).isRequired,
  description: T.string,
};

Task.defaultProps = {
  description: '',
};

export default withStyles(styles)(Task);
