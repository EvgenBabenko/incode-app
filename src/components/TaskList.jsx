import React from 'react';

import Task from './Task';

const tasks = [
    'Add profile page',
    'Add routing',
    'Refactoring code'
]

export default (props) => {
    return (
        <React.Fragment>
            {tasks.map((task, index) => <Task key={index} title={task} />)}
        </React.Fragment>
    )
}

{/* <List dense={dense}>
    {generate(
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <FolderIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary="Single-line item"
                secondary={secondary ? 'Secondary text' : null}
            />
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>,
    )}
</List> */}