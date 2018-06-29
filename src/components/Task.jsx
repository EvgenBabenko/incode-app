import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import Dropdown from './Dropdown';

const styles = {
  task: {
    width: 200,
  },
};

const Task = (props) => {
  const { title, description, classes, id, deleteTask } = props;

  return (
    <ListItem button className={classes.task}>
      <Card className={classes.card}>

        <CardHeader
          title={title}
          component="h2"
          action={(
            <Link to={`/task/${id}`} className="task-link">
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Link>
          )}
        />

        <CardContent>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button onClick={() => deleteTask(id)} size="small">
            Delete task
          </Button>
          <Dropdown {...props} />
        </CardActions>

      </Card>
    </ListItem>
  );
};

Task.propTypes = {
  title: T.string.isRequired,
  id: T.number.isRequired,
  deleteTask: T.func.isRequired,
  description: T.string,
  classes: T.objectOf(T.object)
};

Task.defaultProps = {
  description: '',
  classes: null
};

export default withStyles(styles)(Task);
