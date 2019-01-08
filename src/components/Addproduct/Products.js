import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper, Grid, Tooltip } from '@material-ui/core';
import EditModal from '../EditProducts/EditProductModel'
import { connect } from 'react-redux';
import axios from 'axios'




const styles = theme => ({
  root: {
    display: 'block',
    margin: '3%',
  },
  paper: {
    height: '150px',
    padding: theme.spacing.unit * 2,
    // paddingTop:'20px,',
    // paddingLeft:'12px',

    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    width: '25px',
    float: 'left',
  },
  LogoText: {
    float: 'left',
    marginLeft: '0.3em'
  },
  editImg: {
    position: 'absolute',
    top: '-15px',
    right: '-15px'

  },
  pragraphText: {
    marginTop: '0.7em',
  },
  gridSize: {
    minWidth: '20em',
    flexBasis: '34%'
  }
});
class Products extends Component {

  constructor(props) {
    super(props)
    //const products = props.products;
    this.state = {
      products: []
    }
  }
  componentDidMount = () => {

    //setInterval(() => {

      axios.get('/getCurrencies')
        .then((response) => {
          console.log()
          this.setState({ products: response.data });
        })
        .catch((error) => {
          console.log(error)
        });
    //}, 1000);
  }

  render() {
    const props = this.props;
    const classes = props.classes;
    // const image = 'https://assets.kucoin.com/www/coin/pc/ETH.png'
    return (
      <div className={classes.root}>
        <Grid container spacing={24} >


          {/* map thr array of products */}
          {this.state.products.map((product, index) => {
            return <Grid item sm={4} className={classes.gridSize} key={index}>
              <Paper className={classes.paper}  >
                {/* company logo and name here */}
                <div style={{ 'position': 'relative' }}>

                  <img src={product.thumbnail}
                    className={classes.image}
                    alt='Company Logo'
                    title='Company Logo'
                  />


                  {/* Product company Name  */}

                  <Tooltip id="tooltip-top-start"
                    title="Company Name"
                    placement="top-start">
                    <span className={classes.LogoText}>
                      {product.name}
                    </span>
                  </Tooltip>&nbsp;


                    <span style={{ opacity: 0.7, }}
                    className={classes.LogoText} >
                    {product.FROMSYMBOL}
                  </span>
                  <span className={classes.editImg}>
                    {product.FROMSYMBOL === 'GAMICA' ? <EditModal /> : ''}
                  </span>
                </div>
                {/* product lastprice totalPercentage and changePercentage  */}

                <p className={classes.pragraphText}>
                  <Tooltip id="tooltip-top-start"
                    title="LastPrice"
                    placement="top-start">
                    {product.PRICE < 0 ?
                      <span style={{ color: 'red' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="red" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" /></svg>
                        {product.PRICE.toFixed(3)}
                      </span> :
                      <span style={{ color: 'green' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#289428" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" /></svg>
                        {product.PRICE.toFixed(3)}
                      </span>}
                  </Tooltip>




                  &nbsp;
                    <span>{product.BTC}</span> &nbsp;
                    <Tooltip id="tooltip-top-start"
                    title="TotalPercentage"
                    placement="top-start">
                    {product.CHANGEPCTDAY < 0 ?
                      <span style={{ color: 'red' }}>
                        {product.CHANGEPCTDAY.toFixed(3)}
                      </span> :
                      <span style={{ color: '#539CF3' }}>
                        {product.CHANGEPCTDAY.toFixed(3)}
                      </span>}
                  </Tooltip>




                  <Tooltip id="tooltip-top-start"
                    title="ChangePercentage"
                    placement="top-start">
                    {product.CHANGEPCT24HOUR < 0 ?
                      <span style={{ marginLeft: '100px', color: 'red' }}>
                        {product.CHANGEPCT24HOUR.toFixed(3) + '%'}
                      </span> :
                      <span style={{ marginLeft: '100px', color: '#01AA78' }}>
                        {'+' + product.CHANGEPCT24HOUR.toFixed(3) + '%'}
                      </span>}
                  </Tooltip>
                </p>
                {/* products delete and  edit button here */}



              </Paper>
            </Grid>
          })}
        </Grid>
      </div>
    );
  }
}
Products.propTypes = {
  classes: PropTypes.object.isRequired,
};
;

const mapStateToProps = (state) => ({
  products: state.editReducer
})
export default connect(mapStateToProps)(withStyles(styles)(Products));