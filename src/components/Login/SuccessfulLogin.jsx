import React, { Component } from 'react';
import { FormGroup, Form, Row, Col, Label, Grid, Jumbotron, Button } from 'react-bootstrap';
import "../../css/SuccessLogin.css"
import { RingLoader } from 'react-spinners' ;
import { Redirect } from 'react-router-dom';

class RedirectToHome extends Component {
    render() {
        return (<Redirect to={'/'}/>);
    }
}

export default class SuccessfulLogin extends Component {

    constructor(param) {
        super(param)
        this.state = {
            loading: true
        }
    }

    componentWillMount() {
        this.setState(prevState => ({loading: false}))
    }

    render() {
        return (
            <Grid style={{float: 'center'}}>
             <Jumbotron style={{float: 'center', margin: 20, marginBottom:100}}>
                <h1>Successluf Login</h1>
                <RingLoader 
                    color={'#123abc'}
                    loading={this.state.loading}>
                </RingLoader>
                <RedirectToHome />
            </Jumbotron>  
            </Grid>
        )
    }
}