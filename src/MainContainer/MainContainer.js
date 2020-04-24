import React, { Component } from 'react';
import Home from './Home';
import Cart from './Cart';
import Login from './Login';

export default class MainContainer extends Component {
  state = {
    loggedInUserId: null,
    token: null,
  };

  render() {
    return (
      <div>
        <Home />
        <Cart />
        <Login setToken={this.setToken} />
      </div>
    );
  }
}
