import React, { Component } from 'react';
import AllClothings from './AllClothings/AllClothings';
import styled from 'styled-components';

const SideNavbarStyle = styled.div`
  padding-left: 100px;
  display: flex;
  padding-top: 50px;
`;

export default class Home extends Component {
  state = {
    clothings: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/clothings`)
      .then(response => response.json())
      .then(data => this.setState({ clothings: data }));
  }

  render() {
    return (
      <div>
        <SideNavbarStyle>
          <AllClothings
            grabForCart={this.props.grabForCart}
            clothings={this.state.clothings}
          />
        </SideNavbarStyle>
      </div>
    );
  }
}
