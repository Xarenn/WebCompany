import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { FormControl, FormGroup, Form, Row, Col, Label,
    Grid, Jumbotron, Button, ControlLabel } from 'react-bootstrap';
import { connect} from 'react-redux';
import { Authenticate, validatePassword, IsAuth } from './Auth';
import {bindActionCreators} from 'redux';
import {store} from '../../index';
import SuccessLogin from './SuccessfulLogin';
import AuthenticatedForm from './AuthenticatedForm';

function mapStateToProps(state) {
    return {
        user: state.user
    }
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({Authenticate: Authenticate}, dispatch);
}

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validationStatePassw: null,
            validationStateEmail: null,
            email: "",
            passw: "",
            authStatus: false
        }
    }
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validationEmail = (email) =>  {
        if(this.validateEmail(email.value)) {
            return "success"
        }
        else {
            return "error"
        }
    }

    validationPassword = (passw) => {
        if(passw.value.length > 0) {
            return "success"
        }
        else {
            return "error"
        }
    }

    validation = () => {
        this.setState(prevState => ({
            validationStatePassw: this.validationPassword(prevState.passw),
            validationStateEmail: this.validationEmail(prevState.email),
        }));
    }
    loginCheck = async () => {
        this.validation();
        if(this.state.validationStateEmail === "success" &&
            this.state.validationStatePassw === "success") {
                this.props.user.email = this.state.email.value;
                this.props.user.passw = this.state.passw.value;
                try {
                    this.state.authStatus = true;
                    const func = await this.props.Authenticate(this.props.user);
                    return !!func;
                }catch(error) {
                    this.state.authStatus = false;
                    console.log(error);   
                    return false;             
                } 
            }else {
            this.state.error = "Incorrect Login or Password"
            return false;
        }
    }

    

    login = () => {
    this.loginCheck().then(function (value) {
    });
    }

    render() {
        window.onunload = (ev) => {
            if(!this.state.authStatus && IsAuth() === false) {
                this.state.authStatus = false;
                localStorage.setItem('at','');
            }
        }
        if(IsAuth()) { return <SuccessLogin /> }
        if(IsAuth() === false) {
            this.state.error = "Incorrect Login or Password"
            return(
                <Form componentClass="fieldset" horizontal style={{float:"center", paddingLeft:30, paddingRight:30}}>     
                <h5 style={{color:'red', float:'center'}}>{this.state.error}</h5>
                <FormGroup controlId="EmailValidation" validationState={this.state.validationStateEmail}>
                <ControlLabel>E-mail </ControlLabel>
                    <FormControl inputRef={input => this.state.email = input} type="email" onChange={this.validation} onClick={this.validation}/>
                    <FormControl.Feedback />
                </FormGroup>{' '}
                <FormGroup controlId="passwordValidation" validationState={this.state.validationStatePassw}>
                    <ControlLabel>Password </ControlLabel>
                    <FormControl inputRef={input => this.state.passw = input} type="password" onChange={this.validation} onClick={this.validation}/>
                    <FormControl.Feedback />
                </FormGroup>{' '}
                <Button className="Submit" bsStyle="primary" onClick={this.login}>
            Login
            </Button>
                </Form>
            )
        }else {
            return(
                <Form componentClass="fieldset" horizontal style={{float:"center", paddingLeft:30, paddingRight:30}}>     
                <h5 style={{color:'red', float:'center'}}>{this.state.error}</h5>
                <FormGroup controlId="EmailValidation" validationState={this.state.validationStateEmail}>
                <ControlLabel>E-mail </ControlLabel>
                    <FormControl inputRef={input => this.state.email = input} type="email" onChange={this.validation} onClick={this.validation}/>
                    <FormControl.Feedback />
                </FormGroup>{' '}
                <FormGroup controlId="passwordValidation" validationState={this.state.validationStatePassw}>
                    <ControlLabel>Password </ControlLabel>
                    <FormControl inputRef={input => this.state.passw = input} type="password" onChange={this.validation} onClick={this.validation}/>
                    <FormControl.Feedback />
                </FormGroup>{' '}
                <Button className="Submit" bsStyle="primary" onClick={this.login}>
            Login
            </Button>
                </Form>
            )
        }
    }
    
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);