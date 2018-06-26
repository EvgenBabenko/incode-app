import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Header from './Header';
import ProfileContainer from '../containers/ProfileContainer'
import ProfileEditContainer from '../containers/ProfileEditContainer';


const styles = {
    container: {
        flexGrow: 1,
    },
};

const Layuot = ({ classes }) =>
    <React.Fragment>
        <Header />
        <div className={classNames(classes.container)}>
            <ProfileContainer />
            <ProfileEditContainer />
        </div>
    </React.Fragment>

export default withStyles(styles)(Layuot);