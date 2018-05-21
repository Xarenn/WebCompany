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
             <Jumbotron style={{float: 'center', margin: 0}}>
                <h1 style={{float:"center"}}>Login</h1>
                <p> Enter your Login and Password </p>
                <LoginForm/>
            </Jumbotron>  
            </Grid>
        )
    }

}

