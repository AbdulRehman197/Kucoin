import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid,Tooltip } from '@material-ui/core';
const styles = theme => ({
    root: {
        flexGrow: 1,
        color: '#B0BEC5',
        textAlign: 'justify',
        backgroundColor:'black'
    },
    paper: {
        padding: theme.spacing.unit * 10,
        textAlign: 'justify',
        color: theme.palette.text.secondary,
    },
    heading:{
        color:'#9E9E9E'
    },
    image:{
        width:'24px',
        heigth:'24px'
    }
});

function Footer(props) {
    const { classes } = props;

    return (
        <div className={classes.root} >
            <Grid container spacing={24} style={{ padding:'6%',margin:'-24px'}} >


                <Grid item xm = {4} sm={2}>
                    <h5  >About Us</h5>
                    <h6 className={classes.heading}>Team</h6>
                    <h6 className={classes.heading}>Change Log</h6>
                </Grid>
                <Grid item xm = {4} sm={2} >
                    <h5>Legal</h5>
                    <h6 className={classes.heading}>Term of Use</h6>
                    <h6 className={classes.heading}> Privacy Policy</h6>
                    <h6 className={classes.heading}> AML&CFT</h6>
                </Grid>
                <Grid item xm = {4}  sm={2}>
                <h5>Tranding</h5>
                    <h6 className={classes.heading}>API Documentation</h6>
                    <h6 className={classes.heading}>Fees</h6>
                    <h6 className={classes.heading}>Add token for listing</h6>
                    <h6 className={classes.heading}>Blockchain Explorer</h6>
                </Grid>
                <Grid item xm  = {4} sm={2}>
                    <h5> Contact Us</h5>
                    <h6 className={classes.heading}>Help Center</h6>
                    <h6 className={classes.heading}>Careers</h6>
                </Grid>
                <Grid item  xm={8} sm={4}>
                   <Tooltip id="tooltip-top-start"
                    title="FaceBook"
                    placement="top-start">
                   <a href="http://www.facebook.com"><img src="https://assets.kucoin.com/www/1.7.22/pc/static/facebook-color.1188449f.svg"
                    className={classes.image} alt = 'Facebook Logo'/></a>
                    </Tooltip>&nbsp;&nbsp;&nbsp;
                    <Tooltip id="tooltip-top-start"
                    title="Raddit"
                    placement="top-start">
                    <a href="http:///www.reddit.com"><img src="https://assets.kucoin.com/www/1.7.22/pc/static/reddit-color.c316b8bc.svg"
                    className={classes.image} alt = 'Raddit Logo'/></a>
                    </Tooltip>
                </Grid>
            </Grid>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);