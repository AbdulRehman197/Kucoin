import React, { Component } from 'react';
import {TextField,Button} from '@material-ui/core';
import axios from 'axios'
import actions from '../actionCreator/actions'
import { connect } from 'react-redux'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username:'',
        password :''
      }
    }
  }

  onChange(event) {
    var user = this.state.user;
    user[event.target.getAttribute('name')] = event.target.value;
    this.setState({ user: user });
  }
  handleUserData(event) {
    event.preventDefault();
    axios.post('/user/login',{
      username:this.state.user.username,
      password:this.state.user.password

    })
    .then( (response)=> {
      this.props.myDipatch(actions.loggedInAction(response.data))
         console.log(response.data)
      
    })
    .catch( (error)=> {
      console.log(error,'User not match')
    });
   

  }
  closeModelfunction(){
    setTimeout(this.props.closeModel,100)
  }
 
    render() {
   
      return (
        <div>
          <form onSubmit={this.handleUserData.bind(this)}>
            <h2>Login</h2>
            <TextField
              id="input"
              label="UserName"
              type="text"
              autoComplete="current-password"
              margin="normal"
              name='username'
              onChange={this.onChange.bind(this)}
            />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              name='password'
              onChange={this.onChange.bind(this)}
            />
        
  
        <Button type="submit" variant="raised" size="small" onClick={this.closeModelfunction.bind(this)}>
          Login
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
  export default connect(mapStateToProps,mapDispatchToProps)(Login);
  