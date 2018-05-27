import React, { Component } from 'react';
import { IsAuth } from './Auth'
import { Redirect } from 'react-router-dom';


class AuthenticatedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
    }

    componentWillMount() {
        if(!IsAuth()) {
            this.state.error = "Incorrect Login or Password";
        }else {
            this.state.error = "";
        }
    }

    render() {
        if(!IsAuth())
          window.onbeforeunload = (event) => {
           <Redirect to={"/LoginPage"} />
           localStorage.setItem('at', "");
        }
        return(<h5 style={{color:'red', float:'center'}}>{this.state.error}</h5>)
    }
}

export default AuthenticatedForm;