import React, { Component } from 'react'

import { Button, Checkbox, Form } from 'semantic-ui-react'
export default class Signup extends Component {
    
    handleChange = () =>
    {

    }

    render() {
        return (
            <div style={{paddingTop:"5rem"}}>
                <h1>Signup Form</h1>
                <Form onSubmit={this.logInSubmitted} style={{paddingLeft:"40rem",paddingRight:"40rem"}}>
                    <Form.Field>
                        <label>Full Name</label>
                        <input name="fullname" placeholder='Full Name' />
                    </Form.Field>
                     <Form.Field>
                        <label>Email</label>
                        <input name="email" placeholder='Email' />
                     </Form.Field>
                     <Form.Field>
                        <label>Password</label>
                        <input name="password" type="password" placeholder='Password' />
                     </Form.Field>
                    <Button color="black" type='submit'>Submit</Button>
                 </Form>
            </div>
        )
    }
}
