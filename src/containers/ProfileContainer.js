import React, { Component } from 'react';
import { connect } from 'react-redux'

import ProfileDetail from '../components/ProfileDetail'
import fixtures  from '../fixtures.json'
import { profileActions } from '../modules/profile'

class ProfileWrapper extends Component {
    componentDidMount() {
        this.props.getProfile(fixtures)
    }
    
    render() {
        return (
            this.props.profile
                ? <ProfileDetail {...this.props}/>
                : null
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile
})

const mapDispatchToProps = dispatch => ({
    getProfile: profile => dispatch(profileActions.getProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrapper)