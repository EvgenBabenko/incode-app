import React from 'react';
import { Field, reduxForm } from 'redux-form';
import T from 'prop-types';

import { TextField } from 'redux-form-material-ui';

import Button from '@material-ui/core/Button';

const TaskForm = (props) => {
  const {
    handleSubmit, pristine, submitting
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        autoFocus
        name="title"
        component={TextField}
        type="text"
        label="Task title"
        margin="dense"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Field
        name="description"
        component={TextField}
        type="text"
        label="Task description"
        margin="dense"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Button color="primary" type="submit" disabled={pristine || submitting}>
        Add a task
      </Button>
    </form>
  );
};

TaskForm.propTypes = {
  handleSubmit: T.func.isRequired,
  pristine: T.bool.isRequired,
  submitting: T.bool.isRequired,
};

export default reduxForm({
  form: 'task', // a unique identifier for this form
})(TaskForm);
