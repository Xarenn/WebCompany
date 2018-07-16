import React, { Component } from 'react';
import { Redirect } from 'react-router'
import {bindActionCreators} from 'redux';
import { connect} from 'react-redux';
import axios from 'axios'
import { Grid, Button } from 'react-bootstrap'

import 'rc-menu/assets/index.css';

const API = "http://127.0.0.1:8081/api"

export function selectInvoice(user, idInvoice) {
    user.idInvoice = idInvoice;
    return {
        type:'USER_INVOICE', 
        payload: user
    }; 
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectInvoice: selectInvoice}, dispatch);
}

class Invoices extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        invoices: [],
        clicked: false
    }

    componentWillMount() {
        axios.get(API+"/invoices", {
            headers: { 
                Authorization: "Auth "+this.props.user.token
            },
            params: { id: 1 }
        })
        .then(response => {
          const invoices = response.data;
          this.setState({invoices});
        })
    }

    getInvoice = (id) => {
        console.log("CLICK INVOICE " +id)
        this.props.selectInvoice(this.props.user, id);
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }

    render() {
        return(
        <Grid style={{marginRight:-200}}>
        <ul>
        {this.state.invoices.map(invoice => <li key = {invoice.id} onClick={() => this.getInvoice(invoice.id)}>
        Faktura nr #{invoice.id}{" "}{invoice.seller}{" "}{invoice.buyer}</li>)
        }
        </ul>
        {this.state.clicked ? <Redirect to="/invoice"/> : this.state.clicked=false}
        </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(Invoices);