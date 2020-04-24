import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';

const MyNavBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background: black;
  color: white;
  height: 15vh;

  .logo {
    font-size: 7vh;
    font-weit: bold;
    text_shadow: 3px 3px 3px white;
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 35vw;

    list-style: none;
  }

  .link {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
`;

export class Navbar extends Component {
  render() {
    return (
      <div>
        <MyNavBar>
          <div className="logo">Raйon</div>
          <ul className="nav-links">
            <li>
              {localStorage.getItem('token') ? (
                <Link to="/" className="link">
                  <Icon name="home" size="large" />
                </Link>
              ) : (
                ''
              )}
            </li>
            <li>
              {localStorage.getItem('token') ? (
                <Link to="/cart" className="link">
                  <Icon name="shopping cart" size="large" />
                </Link>
              ) : (
                ''
              )}
            </li>
            <li>
              {localStorage.getItem('token') ? (
                <Link to="/myorders" className="link">
                  <Icon name="ordered list" size="large" />
                </Link>
              ) : (
                ''
              )}
            </li>

            <li>
              {localStorage.getItem('token') ? (
                <Button
                  onClick={() => this.props.logOutClick()}
                  inverted
                  color="black"
                >
                  Log Out
                </Button>
              ) : (
                <Link to="/login" className="link">
                  <Icon name="user" size="large" />
                </Link>
              )}
            </li>
          </ul>
        </MyNavBar>
      </div>
    );
  }
}

export default Navbar;
