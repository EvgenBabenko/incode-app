import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Dropdown } from './Dropdown';

const styles = {
    task: {
        width: 200,
    }
};

const Task = ({ title, description, classes, id, deleteTask }) => {

    return (
        <ListItem button className={classes.task}>
            <Card className={classes.card}>
                <CardHeader title={title} component="h2" />
                <CardContent>
                    <Typography component="p" children={description} />
                </CardContent>
                <CardActions>
                    <Button onClick={() => deleteTask(id)} size="small" children="Delete task" />
                    <Dropdown />
                </CardActions>
            </Card>
        </ListItem>
    )
}

export default withStyles(styles)(Task);