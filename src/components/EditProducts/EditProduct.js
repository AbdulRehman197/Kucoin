import React, { Component } from 'react';
import {TextField,Button} from '@material-ui/core';
import { connect } from 'react-redux';
import actions from '../actionCreator/actions'
import axios from 'axios'


class Editproduct extends Component {
    constructor(props) {
      super(props)
      this.state = {
        product:{
          name: "Gamica",
          BTC: "BTC",
          image :'https://assets.kucoin.com/www/coin/pc/ETH.png',
          company:'Ethereum',
          shortName:'ETH',
          lastPrice:'124544',
          totalPercentage:'-35',
          changePercentage:'5',
          lowArrow:'loss'
      }
      }
    }
   
    onChange(event) {
      var product = this.state.product;
      product[event.target.getAttribute('name')] = event.target.value;
      this.setState({ product: product });
    }
    handleUserData(event) {
      event.preventDefault();
      axios.put('/:name', this.state.product)
      .then( (response)=> {
        this.props.myDipatch(actions.editAction(response.data))
        console.log(response.data)
        
      })
      .catch( (error)=> {
        console.log(error,'User not match')
      });
      
  


     

    //   var targetCompany = state.filter((item) => {
    //     return item.name == 'Gamica'
    // })[0];

    // var targetIndex = state.indexOf(targetCompany);

    // var freshObj = { ...targetCompany, ...action.editProduct };

    // state[targetIndex] = freshObj;

    }
    closeModelfunction(){
      setTimeout(this.props.closeModel,100)
    }
    render() {
   
      return (
        <div>
          <form onSubmit={this.handleUserData.bind(this)}  >
            <h2>EDIT</h2>
            <TextField
              id="input"
              label="company"
              type="text"
              autoComplete="current-password"
              margin="normal"
              name='company'
              onChange={this.onChange.bind(this)}
            />
            <TextField
              id="contect-input"
              label="lastPrice"
              type="number"
              margin="normal"
              name='lastPrice'
              onChange={this.onChange.bind(this)}
            />
        
  
        <Button type="submit" variant="raised" size="small" onClick={this.closeModelfunction.bind(this)}  >
        Save
        </Button>
          </form>
        </div>
      );
    }
  }
  const mapStateToProps=(state)=>{
    return {
      
    }
  }

  const mapDispatchToProps=(dispatch, state)=>{
    return {
      myDipatch:function(args){
        dispatch(args);
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Editproduct);
  