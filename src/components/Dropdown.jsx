import React, { Component } from "react";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Dropdown extends Component {
  handleChange = event => {
    this.props.changeTaskStatus(this.props.id, event.target.value)
  };

  render() {
    console.log(1234, this.props)
    return (
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="taskStatus-simple">Status</InputLabel>
          <Select
            value={this.props.status}
            onChange={this.handleChange}
            inputProps={{
              name: 'taskStatus',
              id: 'taskStatus-simple',
            }}
          >
            <MenuItem value={'To do'} children='To do' />
            <MenuItem value={'In progress'} children='In progress' />
            <MenuItem value={'Rewiew'} children='Rewiew' />
            <MenuItem value={'Done'} children='Done' />
          </Select>
        </FormControl>
      </form>
    )
  }
}

export default Dropdown;
