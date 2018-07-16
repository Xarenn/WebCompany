import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Jumbotron, Form, FormGroup, Grid, Button } from 'react-bootstrap';
import Invoices from './Invoices'
import Statistics from './Statistics'

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
                <h4>Client invoices</h4>
                <Invoices />
            </Jumbotron>
            </FormGroup>{' '}
            <FormGroup style={{right: 200, float: 'right', textAlign: 'center', paddingBottom:200}}>
                <Jumbotron style={{paddingLeft:100, position: 'absolute', right: 100, float: 'right', textAlign: 'left', paddingBottom:300,paddingRight:100}}>
                   <h4>Statistics</h4>
                    <Statistics/>
                </Jumbotron>
            </FormGroup>{' '}
            </Form>
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(AuthAccount);