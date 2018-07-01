import React from 'react';
import { Field, reduxForm } from 'redux-form';
import T from 'prop-types';

import Button from '@material-ui/core/Button';

import { TextField } from 'redux-form-material-ui';

const CommentForm = (props) => {
  const {
    handleSubmit, pristine, submitting,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        autoFocus
        name="content"
        component={TextField}
        type="text"
        label="Comment"
        margin="dense"
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Button color="primary" type="submit" disabled={pristine || submitting}>
        Add a comment
      </Button>
    </form>
  );
};

CommentForm.propTypes = {
  handleSubmit: T.func.isRequired,
  closeEditProfile: T.func.isRequired,
  pristine: T.func.isRequired,
  submitting: T.func.isRequired,
  reset: T.func.isRequired,
};

export default reduxForm({
  form: 'comment', // a unique identifier for this form
})(CommentForm);
