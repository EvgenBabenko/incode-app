import React, { Component } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class Dropdown extends Component {
    state = {
        taskStatus: '',
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <form autoComplete="off">
                <FormControl>
                    <InputLabel htmlFor="taskStatus-simple">Status</InputLabel>
                    <Select
                        value={this.state.taskStatus}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'taskStatus',
                            id: 'taskStatus-simple',
                        }}
                    >
                        <MenuItem value={10} children="To do" />
                        <MenuItem value={20} children="In progress" />
                        <MenuItem value={30} children="Rewiew" />
                        <MenuItem value={40} children="Done" />
                    </Select>
                </FormControl>
            </form>
        )
    }
}