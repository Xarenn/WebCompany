import React, { Component } from 'react';
import { FormControl, FormGroup, Form, Label,
    Grid, Jumbotron, Button } from 'react-bootstrap';
import { Redirect } from 'react-router'
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu, {Item as MenuItem} from 'rc-menu'


const API = "http://127.0.0.1:8081/api"

export function getLastInvoice(user, idInvoice) {
    user.idInvoice = idInvoice;
    return {
        type:'USER_INVOICE', 
        payload: user
    }; 
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({getLastInvoice: getLastInvoice}, dispatch);
}

class Statistics extends Component {
    
    constructor(props) {
        super(props)
    }

    state = {
        statistics: [], clicked: true
    }

    componentWillMount() {
        axios.get(API+"/statistics", {
            headers: { 
                Authorization: "Auth "+this.props.user.token
            },
            params: { id: 1 }
        })
        .then(response => {
          const statistics = response.data;
          this.setState({statistics});
        })
    }

    getLastInvoice = (id) => {
        console.log("CLICK LAST INVOICE " +id)
        this.props.getLastInvoice(this.props.user, id);
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }

    render() {
        return(
            <Jumbotron style={{marginBottom:-200}}>
            <h5>
            Invoices (quantity): {this.state.statistics.quantity} 
            </h5>
            {' '}
            <h5>
            Taxes: {this.state.statistics.tax} pln
            </h5>
            {' '}                    
            <h5>
            Vat: {this.state.statistics.vat} pln
            </h5>
            {' '}
            <Menu style={{marginTop:50}}>
            <MenuItem style={{cursor:'pointer'}}>Taxes by month
            </MenuItem>
            <MenuItem style={{cursor:'pointer'}}>Invoices by month</MenuItem>
            <MenuItem style={{cursor:'pointer'}}>Warehouse</MenuItem>
            </Menu>
            </Jumbotron>
        )
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Statistics);
