import React from 'react';
import T from 'prop-types';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

import AddNew from './AddNew';

const styles = {
  root: {
    display: 'flex'
  },
};

const Conrols = (props) => {
  const {
    title, children, _id, classes, deleteTask
  } = props;

  function handleDeleteItem() {
    deleteTask(_id);
  }

  return (
    <div className={classes.root}>
      <AddNew title={title} edit {...props}>
        {children}
      </AddNew>
      {/* <Button variant="fab" color="secondary" aria-label="edit" mini>
        <EditIcon />
      </Button> */}
      <Button onClick={handleDeleteItem} variant="fab" aria-label="delete" mini>
        <DeleteIcon />
      </Button>
    </div>
  );
};

Conrols.propTypes = {
  title: T.string.isRequired,
  children: T.element.isRequired,
  // deleteItem: T.func.isRequired,
  id: T.number.isRequired,
  classes: T.objectOf(T.string).isRequired,
};

export default withStyles(styles)(Conrols);
