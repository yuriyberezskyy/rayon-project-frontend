import React, { Component } from 'react';
import { element } from 'prop-types';
import { Table } from 'semantic-ui-react';
export default class AllOrders extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/orders`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }) //eslint-disable-line
      .then(response => response.json())
      .then(elements => {
        let nop = localStorage.getItem('loggedInUserId');
        let loggedInUserId = JSON.parse(nop);
        let filteredElements = elements.filter(
          element => element.user.id === loggedInUserId,
        );
        this.setState({ orders: filteredElements });
      });
  }

  render() {
    if (this.state.orders) {
      return (
        <div style={{ paddingTop: '40px', marginLeft: '400px' }}>
          <Table basic="very" celled collapsing>
            <Table.Header style={{ fontSize: '40px', paddingTop: '10px' }}>
              <Table.Row>
                <Table.HeaderCell>Order Number</Table.HeaderCell>
                <Table.HeaderCell>Clothings</Table.HeaderCell>
                <Table.HeaderCell>Total</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body style={{ textAlign: 'center' }}>
              {this.state.orders.map(order => (
                <Table.Row key={order.id} order={order}>
                  <Table.Cell>
                    <h2>{order.id}</h2>
                  </Table.Cell>
                  <Table.Cell>
                    <h3>
                      {order.clothings.map(clothing => (
                        <h4>{clothing.name}</h4>
                      ))}
                    </h3>
                  </Table.Cell>
                  <Table.Cell>
                    <h3>{order.total}$</h3>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      );
    } else {
      return (
        <div>
          <h1>You haven't ordered yet</h1>
        </div>
      );
    }
  }
}
