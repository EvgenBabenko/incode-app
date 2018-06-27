import React, { Component } from 'react';
import { connect } from 'react-redux'

import ProfileDetail from '../components/ProfileDetail'
import fixtures  from '../fixtures.json'
import { userActions } from '../modules/user'

class ProfileWrapper extends Component {
    componentDidMount() {
        if (this.props.profile) return

        this.props.loadProfile(fixtures)
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
    profile: state.user.profile
})

const mapDispatchToProps = dispatch => ({
    loadProfile: profile => dispatch(userActions.loadProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrapper)