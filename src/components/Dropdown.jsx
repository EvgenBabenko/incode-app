import React, { Component } from 'react';
import T from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Dropdown extends Component {
  handleChange = (event) => {
    const { changeTaskStatus, id } = this.props;

    changeTaskStatus(id, event.target.value);
  };

  render() {
    const { status } = this.props;
    console.log(1234, this.props);
    return (
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="taskStatus-simple">
            Status
          </InputLabel>
          <Select
            value={status}
            onChange={this.handleChange}
            inputProps={{
              name: 'taskStatus',
              id: 'taskStatus-simple',
            }}
          >
            <MenuItem value="To do">
              To do
            </MenuItem>
            <MenuItem value="In progress">
              In progress
            </MenuItem>
            <MenuItem value="Rewiew">
              Rewiew
            </MenuItem>
            <MenuItem value="Done">
              Done
            </MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

Dropdown.propTypes = {
  changeTaskStatus: T.func.isRequired,
  id: T.number.isRequired,
  status: T.string.isRequired
};

export default Dropdown;
