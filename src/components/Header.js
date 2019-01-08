import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar, Typography, SvgIcon, IconButton } from '@material-ui/core';
import LoginModal from './Login/LoginModel'
import SignupModal from './Signup/SignupModel'
import { connect } from 'react-redux'

// import axios from 'axios'



const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  flex: {
    flex: 1,
  },
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20,
    backgroundColor: '#01579B',
    // Match [sm, md + 1[
    //       [sm, lg[
    //       [600px, 1280px[
    [theme.breakpoints.between('xs', 'sm')]: {
      backgroundColor: '#0288D1',
    },
  },
  headerbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%'
  }
})

// Home icon fucntion
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
class Header extends Component {

  constructor() {
    super();
    this.state = {};
  }
  render() {
    const props = this.props;
    const classes = props.classes;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.menuButton}>
          <Toolbar>
            <IconButton className={classes.menuButton} aria-label="Menu">
              <HomeIcon style={{ fontSize: 36, color: '#fff', marginRight: '0.6em' }} />
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="title" color="inherit" >
              kuCoin
          </Typography>
            <div className={classes.headerbar}>
              {this.props.user._id ? <div >Logout</div> : <LoginModal />}
              {this.props.user._id ? <div style = {{marginLeft:30 +'px'}}>Admin</div> : <SignupModal />}
            </div>
          </Toolbar>
        </AppBar>
      </div>

    )
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}
export default connect(mapStateToProps)(withStyles(styles)(Header));
