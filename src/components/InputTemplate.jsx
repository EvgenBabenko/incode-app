import React from 'react';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

export default ({ name, label, type, area }) => (
  !area
    ? <Field name={name} component={TextField} type={type} label={label} InputLabelProps={{ shrink: true }} />
    : <Field name={name} multiline rows="4" component={TextField} label={label} />
);
