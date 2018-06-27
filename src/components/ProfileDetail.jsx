import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  line: {
    margin: 0,
  },
};

const ProfileDetail = (props) => {
  const { classes, profile } = props

  return (
    <div className={classes.row}>
      {Object.keys(profile).map((key, index) => {
        return key === 'avatar'
          ? <Avatar key={index} src={profile[key]} className={classNames(classes.avatar, classes.bigAvatar)} />
          : <p key={index} className={classNames(classes.line)}>
            {`${key}: ${profile[key]}`}
          </p>
      })}
      <Link to="/edit">
        <Button color="primary" variant="contained">
          Edit
        </Button>
      </Link>

    </div>
  );
};

export default withStyles(styles)(ProfileDetail);
