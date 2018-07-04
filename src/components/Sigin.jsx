import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Login from './Forms/Login';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px'
  },
};

const Sigin = (props) => {
  console.log(props);

  const { classes, signin } = props;

  function submit(values) {
    signin(values);
    // submitCallback(values, _id);
  }

  return <Login onSubmit={submit} />;
};

Sigin.propTypes = {
  classes: T.objectOf(T.string).isRequired,
  text: T.string,
  children: T.element,
};

Sigin.defaultProps = {
  text: '',
  children: null,
};

export default withStyles(styles)(Sigin);
