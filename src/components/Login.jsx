import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px'
  },
};

const Login = ({ classes }) => (
  <form className={classes.root}>
    <TextField
      id="email"
      label="Email"
      className={classes.textField}
      fullWidth
      margin="normal"
    />
    <TextField
      id="password"
      label="Pasword"
      className={classes.textField}
      fullWidth
      margin="normal"
    />
    <Button variant="contained" color="primary" fullWidth className={classes.button}>
      Login
    </Button>
    <p>
      or
    </p>
    <Link to="/signin" className={classes.link}>
      <Button color="primary" fullWidth className={classes.button}>
        SignIn
      </Button>
    </Link>
  </form>
);

Login.propTypes = {
  classes: T.objectOf(T.string).isRequired,
  text: T.string,
  children: T.element,
};

Login.defaultProps = {
  text: '',
  children: null,
};

export default withStyles(styles)(Login);
