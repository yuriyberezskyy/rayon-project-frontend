import React, { Component } from 'react'
import Home from './Home'
import Cart from './Cart'
import Login from './Login'

export default class MainContainer extends Component {
    state = {
       loggedInUserId: null,
       token: null 
    }
    
      
    setToken = ({token}) => {
    // localStorage.token = token;
    // localStorage.loggedInUserId = loggedInUserId;
    console.log("HELLO",token)
    // this.setState({
    //   token: token,
    //   loggedInUserId: loggedInUserId
    // })
  }
    render() {
       
       console.log(this.setToken)
     
        return (
            <div>

              <Home/>
              <Cart/>
              <Login setToken={ this.setToken }/> 
            </div>         
        )
    }
}
