import React, { Component } from 'react'
import {Link} from  "react-router-dom";
import styled from 'styled-components'
import SideNavbar from '../MainContainer/SideNavbar'
import { Icon } from 'semantic-ui-react'


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
       color:white;
       font-size:2.5vh;
       text-decoration: none;
   }
`



export class Navbar extends Component {
    render() {
        return (
            <MyNavBar>
            
            <div className="logo">Rayon</div>

            <ul className="nav-links">
                <li>
                    <Link to="/" className="link"><Icon name='home' size='large' /></Link>
                </li>
                <li>
                    <Link to="/cart" className='link'><Icon name='shopping cart' size='large' /></Link>
                </li>
                <li>
                    <Link to="/login" className="link"><Icon name='user' size='large' /></Link>
                </li>
            </ul>
            </MyNavBar>
        )
    }
}


export default Navbar
