import React, { Component } from 'react';
import { FormControl, FormGroup, Form, Label,
    Grid, Jumbotron, Button} from 'react-bootstrap';


export default class InvoiceEdit extends Component {
    render() {
        return(
            <Jumbotron style={{marginBottom:-200}}>
            <h5>
            Invoices (number): 
            </h5>
            {' '}
            <h5>
            Taxes:
            </h5>
            {' '}                    
            <h5>
            Vat:
            </h5>
            {' '}
            <h5>
            Last added invoice: 
            </h5>
            {' '}
            <h5>
            Invoices by month:
            </h5>
            {' '}
            <h5>
           <a href="/warehouse">Warehouse</a>
            </h5>
            </Jumbotron>
        )
    }
}
