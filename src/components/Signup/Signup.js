import React, { Component } from 'react';
import {TextField,Button} from '@material-ui/core';
import axios from 'axios'

class Signup extends Component {
    constructor(props) {
      super(props)
      this.state = {
        user: {
          name: '',
          email: '',
          username:'',
          password :''
        },
        users:[]
      }
    }
  
    onChange(event) {
      var user = this.state.user;
      user[event.target.getAttribute('name')] = event.target.value;
      this.setState({ user: user });
    }
    handleUserData(event) {
  
      event.preventDefault();
      // var newUser = new User(this.state.user.name, this.state.user.contect);
      var users = this.state.users;
  
     
  
     
      console.log(this.state.users)

      axios.post('/user',{
        name:this.state.user.name,
        email:this.state.user.email,
        username:this.state.user.username,
        password:this.state.user.password

      })
      .then( (response)=> {
        users.push(response.data)
        console.log(response.data)
      })
      .catch( (error)=> {
        console.log(error);
      });
  
    }
    closeModelfunction(){
      setTimeout(this.props.closeModel,100)
    }
    render() {
   
      return (
        <div>
          <form onSubmit={this.handleUserData.bind(this)}>
            <h2 >Signup</h2>
            <TextField
              id="name-input"
              label="Name"
              type="text"
              autoComplete="current-password"
              margin="normal"
              name='name'
              onChange={this.onChange.bind(this)}
            />
            <TextField
              id="email-input"
              label="Email"
              type="text"
              autoComplete="current-password"
              margin="normal"
              name='email'
              onChange={this.onChange.bind(this)}
            />
            <TextField
              id="username-input"
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
          Signup
        </Button>
          </form>
        </div>
      );
    }
  }
  
  export default Signup;
  