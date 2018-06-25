import React from 'react';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

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

const renderProfileField = (field, classes) => 
    Object.keys(field).map((key, index) =>
        <p key={index} className={classNames(classes.line)}>{key}:{field[key]}</p>
    )

const ProfileDetail = (props) => {
    const { classes, profile: { generalInfo, avatar, technicalInfo } } = props

    return (
        <div className={classes.row}>
            <Avatar
                src={avatar}
                className={classNames(classes.avatar, classes.bigAvatar)}
            />
            {renderProfileField(generalInfo, classes)}

            {renderProfileField(technicalInfo, classes)}

             <Button type="submit" variant="contained" color="primary" children="Edit" />
        </div>
    )
}

export default withStyles(styles)(ProfileDetail);