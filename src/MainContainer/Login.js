import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  logInSubmitted = event => {
    event.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (!data.token) {
          console.log(data);
          this.setState({
            errors: [...data.errors],
          });
        } else {
          this.props.takeTheToken(data.token, data.user.id);
          this.props.history.push('/');
        }
      });
  };
  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          color="grey"
          style={{ height: '50vh' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="black" textAlign="center">
              Log-in to your account
            </Header>
            <Form onSubmit={event => this.logInSubmitted(event)} size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.onChange}
                  value={this.state.username}
                  name="email"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  onChange={this.onChange}
                  name="password"
                  value={this.state.password}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                {this.state.errors.map(error => `${error}`)}
                <Button type="submit" color="black" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
