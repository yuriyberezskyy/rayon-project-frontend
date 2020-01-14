import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from '../MainContainer/Login'
import Home from '../MainContainer/Home'
import Signup from '../MainContainer/Signup'
import Cart from '../MainContainer/Cart'
import Navbar from './Navbar'
export default class NavContainer extends Component {
    render() {
        return (
            <div>
                 <Router>
                    <Navbar />
                     <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/cart" component={Cart}/>
                        {/* <Route path="/signup" component={Signup}/> */}
                        {/* <Route component={NoPageFound}/> */}
                        {/* <Route component={NoPageFound}/> */}
                      </Switch>
                 </Router>

                 
            </div>
        )
    }
}
