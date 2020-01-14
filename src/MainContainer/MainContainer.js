import React, { Component } from 'react'
import Home from './Home'
import Cart from './Cart'
import Login from './Login'

export default class MainContainer extends Component {

      
    
    render() {
       
        return (
            <div>
              <Home/>
              <Cart/>
              <Login/> 
            </div>         
        )
    }
}
