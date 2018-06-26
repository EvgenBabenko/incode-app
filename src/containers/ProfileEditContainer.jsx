import React, { Component } from 'react'
import { connect } from 'react-redux'
import { profileActions } from '../modules/profile'

import ProfileEdit from '../components/ProfileEdit'

class ProfileEditContainer extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
        
        this.props.editProfile(values)
    }

    render() {
        return <ProfileEdit onSubmit={this.submit} {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    initialValues: state.profile.profile,
})

const mapDispatchToProps = dispatch => ({
    editProfile: profile => dispatch(profileActions.editProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditContainer)