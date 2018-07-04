import React from 'react';
import { Field, reduxForm } from 'redux-form';
import T from 'prop-types';

import { TextField } from 'redux-form-material-ui';

import Button from '@material-ui/core/Button';

const Login = (props) => {
  const {
    handleSubmit, pristine, submitting,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        autoFocus
        name="email"
        component={TextField}
        type="text"
        label="Email"
        margin="dense"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Field
        autoFocus
        name="password"
        component={TextField}
        type="text"
        label="Password"
        margin="dense"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Button color="primary" type="submit" disabled={pristine || submitting}>
        Signin
      </Button>
    </form>
  );
};

Login.propTypes = {
  handleSubmit: T.func.isRequired,
  pristine: T.bool.isRequired,
  submitting: T.bool.isRequired,
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
})(Login);