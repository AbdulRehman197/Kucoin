import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,Typography,Modal,Button } from '@material-ui/core';
import Signup from './Signup';



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
    borderRadius:'5px',
    textAlign:'center'
  },
});

class SignupModal extends React.Component {
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
        <Button onClick={this.handleOpen} style= {{color:'#fff'}}>Signup</Button>
        <Modal
          autoFocus
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose = {this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="subheading" id="simple-modal-description">
              <div>
              <Signup closeModel={this.handleClose} />
              </div>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SignupModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
SignupModal = withStyles(styles)(SignupModal);

export default SignupModal;
