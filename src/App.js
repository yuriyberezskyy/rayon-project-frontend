import React,{ Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Login from './MainContainer/Login'
import Home from './MainContainer/Home'
import Signup from './MainContainer/Signup'
import Cart from './MainContainer/Cart'
import Navbar from './NavContainer/Navbar'
import AllOrders from './MainContainer/AllOrders';


export default class App extends Component {
state = {
    loggedInUserId: null,
    token: null,
    cartClothes: [],
    loggedIn: false,
    orderItems: []
  }  

   logOutClick = () => {
    localStorage.removeItem("loggedInUserId")
    localStorage.removeItem("token")

    this.setState({
      loggedInUserId: null,
      token: null
    })
  }  

  takeTheToken= (token,id)=>{
   
    const tokenFromProps= localStorage.setItem("token",token)
    const loggedInUserIDFromProps = localStorage.setItem("loggedInUserId",id)
  this.setState({
      token: token,
      loggedInUserId: id
    })
  }

  componentDidMount(){
    this.setState({
      token: localStorage.getItem("token"),
      loggedInUserId: localStorage.getItem("loggedInUserID")
    })
  }

  grabForCart = (clothing) => {
     if(!localStorage.getItem("savedData"))
     {
       localStorage.setItem("savedData",JSON.stringify([clothing]))
     }
     else{
       let arr = localStorage.getItem("savedData")
       let arr2 = JSON.parse(arr)
       const found = arr2.some(el => el.id === clothing.id);
       if(found === false){
       arr2.push(clothing)
       localStorage.setItem("savedData",JSON.stringify(arr2))
       }
     }   
  }
  

  
  
  render() {
    console.log(this.state.loggedInUserId)
    return (
      <div className="App">
            <div>
                 <Router>
                    <Navbar logOutClick={this.logOutClick}/>
                     <Switch>
                       <Route exact path="/" render={(renderProps)=> { return localStorage.getItem("token") ? <Home {...renderProps} grabForCart={this.grabForCart}/>:<Redirect to="/login" />  }}/>
                        <Route path="/login" render={(renderProps)=> <Login {...renderProps} takeTheToken={this.takeTheToken}/>}/>
                        <Route path="/cart" render={(renderProps)=>{return localStorage.getItem("token") ? <Cart {...renderProps} loggedInUserId={this.state.loggedInUserId} cartClothes = {this.state.cartClothes} loggedIn ={this.state.loggedIn}/>:<Redirect to="/login"/>}}/>
                         <Route path="/myorders" render={(renderProps)=>{return localStorage.getItem("token") ? <AllOrders {...renderProps} />:<Redirect to="/login"/>}}/>
                        
                        <Route path="/signup" component={Signup}/>
                      </Switch>
                 </Router>
            </div>
    </div>
    )
  }
}

    

