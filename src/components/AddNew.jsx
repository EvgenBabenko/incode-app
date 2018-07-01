import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

class AddNew extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });

    console.log('handleClickOpen', this.props)

    if (this.props.edit) this.props.openEdit();
    
  };

  handleClose = () => {
    this.setState({ open: false });

    if (this.props.edit) this.props.closeEdit();
  };

  render() {
    const {
      children, title
    } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="fab" color="primary" aria-label="add" mini>
          <AddIcon />
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >

          <DialogTitle id="form-dialog-title">
            {title}
          </DialogTitle>

          <DialogContent>
            {children}
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>

        </Dialog>
      </div>
    );
  }
}

export default AddNew;
