import React from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
    line: {
        margin: 0
    }
};

const ProfileDetail = (props) => {
    const { classes, profile } = props

    return (
        <div className={classes.row}>
            {Object.keys(profile).map((key, index) => {
                return key === 'avatar'
                    ? <Avatar
                        key={index}
                        src={profile[key]}
                        className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                    : <p
                        key={index}
                        className={classNames(classes.line)}
                    >
                        {key}: {profile[key]}
                    </p>
            })}
        </div>
    )
}

export default withStyles(styles)(ProfileDetail);