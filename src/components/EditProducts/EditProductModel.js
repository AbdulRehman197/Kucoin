import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Modal, IconButton, Tooltip } from '@material-ui/core';
import Editproduct from './EditProduct';
import editbutton from '../images/editbutton.png'



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 40,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 7,
    borderRadius: '5px',
    textAlign: 'center'
  },
  iconButton: {

    position: 'absolute',
    top: 0,
    right: 0,

  },
  imgStyle: {
    width: '20px'
  },

});

class EditModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Tooltip id="tooltip-top-start"
          title="Edit"
          placement="top-start">
          <IconButton className={classes.iconButton}>
            <img src={editbutton} onClick={this.handleOpen} className={classes.imgStyle}
              alt='EditButton' /></IconButton>
        </Tooltip >
        <Modal
          autoFocus
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          className={classes.modelStyle}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="subheading" id="simple-modal-description">
              <div>
                <Editproduct closeModel={this.handleClose} />
              </div>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

EditModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
EditModal = withStyles(styles)(EditModal);

export default EditModal;
