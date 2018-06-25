import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import reduceFormByAttr from '../../utils/reduceFormByAttr'

export default class extends Component {
    state = {
        firstName: '',
        lastName: '',
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault()

        this.props.addProfile(reduceFormByAttr('name', event.target))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    // id="firstName"
                    label="First name"
                    name="firstName"
                    // className={classes.textField}
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                    margin="normal"
                />
                <TextField
                    // id="firstName"
                    label="Last name"
                    name="lastName"
                    // className={classes.textField}
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" children="Add" />
            </form>
        )
    }
}