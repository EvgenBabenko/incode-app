import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import ProfileDetails from '../components/ProfileDetails';
import EditProfileForm from '../components/Forms/EditProfileForm';

import * as userActionCreators from '../actions/userActions';

class Profile extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(userActionCreators, dispatch);

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(userActionCreators.me());
  }

  submit(values) {
    const { dispatch } = this.props;
    // print the form values to the console
    console.log(values);

    // updateProfile(values);
    dispatch(userActionCreators.updateProfile(values));

    // closeEditProfile();
    dispatch(userActionCreators.closeEditProfile());
  }

  render() {
    const { isEditProfile } = this.props;

    return (
      isEditProfile
        ? <EditProfileForm {...this.props} onSubmit={this.submit} {...this.boundActionCreators} />
        : <ProfileDetails {...this.props} {...this.boundActionCreators} />
    );
  }
}

const mapStateToProps = state => ({
  // profile: state.user.profile.profile,
  // isEditProfile: state.user.isEditProfile,
  // initialValues: state.user.profile.profile,
});

// const mapDispatchToProps = dispatch => ({
//   updateProfile: profile => dispatch(userActions.updateProfile(profile)),
//   openEditProfile: () => dispatch(userActions.openEditProfile()),
//   closeEditProfile: () => dispatch(userActions.closeEditProfile()),
// });

Profile.propTypes = {
  dispatch: T.func.isRequired,
  profile: T.objectOf(T.string).isRequired,
  isEditProfile: T.bool.isRequired
};

export default connect(mapStateToProps)(Profile);
