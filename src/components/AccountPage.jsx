import React, { Component } from 'react';
import { FormGroup, Form, Row, Col, Label, Grid, Jumbotron, Button } from 'react-bootstrap';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import "../css/AccountPage.css";
import Account from './Account/Account'

export default class AccountPage extends Component {

    constructor(param) {
        super(param)
    }

    render() {
        return (
            <Grid style={{float: 'center'}}>
             <Jumbotron style={{float: 'center', margin: 20, marginBottom:100}}>
                <Account />
            </Jumbotron>
            </Grid>
        )
    }
}