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

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

const Task = ({ title, classes, id, deleteTask }) => {
    console.log(deleteTask, id)
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <ListItem button className={classes.task} disableGutters>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Word of the Day
            </Typography>
                    <Typography variant="headline" component="h2">
                        be{bull}nev{bull}o{bull}lent
            </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
            </Typography>
                    <Typography component="p">
                        well meaning and kindly.<br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => deleteTask(id)} size="small">Learn More</Button>
                </CardActions>
            </Card>
        </ListItem>
    )
}
// <ListItemText primary={title} />



export default withStyles(styles)(Task);