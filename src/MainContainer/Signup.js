import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
export default class Signup extends Component {
  state = {
    email: '',
    fullname: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/signup`, {
      //eslint-disable-line
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        fullname: this.state.fullname,
      }),
    })
      .then(response => response.json())
      .then(element => {
        this.setState({
          email: '',
          password: '',
          fullname: '',
        });
        this.props.history.push('/login');
      });
  };

  render() {
    return (
      <div style={{ paddingTop: '5rem' }}>
        <h1>Signup Form</h1>
        <Form
          onSubmit={e => this.handleSubmit(e)}
          style={{ paddingLeft: '40rem', paddingRight: '40rem' }}
        >
          <Form.Field>
            <label>Full Name</label>
            <input
              onChange={event =>
                this.setState({ fullname: event.target.value })
              }
              value={this.state.fullname}
              name="fullname"
              placeholder="Full Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              onChange={event => this.setState({ email: event.target.value })}
              value={this.state.email}
              name="email"
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              onChange={event =>
                this.setState({ password: event.target.value })
              }
              value={this.state.password}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Field>
          <Button color="black" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
