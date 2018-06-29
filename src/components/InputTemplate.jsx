import React from 'react';
import { Field } from 'redux-form';
import T from 'prop-types';

import { TextField } from 'redux-form-material-ui';

const InputTemplate = ({ name, label, type, area }) => (
  <div>
    {!area
      ? (
        <Field
          name={name}
          component={TextField}
          type={type}
          label={label}
          InputLabelProps={{ shrink: true }}
        />
      )
      : (
        <Field
          name={name}
          multiline
          rows="4"
          component={TextField}
          label={label} />
      )
    }
  </div>
);

InputTemplate.propTypes = {
  name: T.string.isRequired,
  label: T.string.isRequired,
  type: T.string.isRequired,
  area: T.bool
};

InputTemplate.defaultProps = {
  area: false
};

export default InputTemplate;
