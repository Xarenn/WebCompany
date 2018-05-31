import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Jumbotron, Form, FormGroup, Grid, Table, Button } from 'react-bootstrap';
import { store } from '../../index';
import Invoices from './Invoices'

function mapStateToProps(state) {
    return {
        user: state.user
    }
};

class AuthAccount extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return( 
            <Grid style={{margin:0}}>
            <Form componentClass="fieldset" inline style={{paddingBottom:200}}>     
            <FormGroup>
            <Jumbotron>
                <Invoices />
            </Jumbotron>
            </FormGroup>{' '}
            <FormGroup style={{right: 200, float: 'right', textAlign: 'center', paddingBottom:200}}>
                <Jumbotron style={{paddingLeft:100, position: 'absolute', right: 100, float: 'right', textAlign: 'center', paddingBottom:300,paddingRight:100}}>
                   <h4>rthrthrthrthrthrthrthrthrt
                    </h4>
                    <h5>tahks</h5>
                </Jumbotron>
            </FormGroup>{' '}
            </Form>
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(AuthAccount);