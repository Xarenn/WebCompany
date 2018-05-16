import React, { Component } from 'react';
import { FormControl, FormGroup, Form, Row, Col, Label,
    Grid, Jumbotron, Button, ControlLabel } from 'react-bootstrap';
import LoginForm from './Login/LoginForm'
import "../css/LoginPage.css"

export default class LoginPage extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Grid style={{float: 'center'}}>
             <Jumbotron style={{float: 'center', margin: 20, paddingBottom:200}}>
                <h1>Login</h1>
                <p> Enter your Login and Password </p>
                    <LoginForm/>
            </Jumbotron>  
            </Grid>
        )
    }

}

