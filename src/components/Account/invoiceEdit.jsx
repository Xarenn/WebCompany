import React, { Component } from 'react';
import { FormControl, FormGroup, Form, Label,
    Grid, Jumbotron, Button} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

export default class InvoiceEdit extends Component {

    state = {
        oldInvoice: this.props.invoice,
        columns: this.props.columns,
        oldItems: this.props.items
    }

    cellEdit = cellEditFactory({
        mode: 'click',
        afterSaveCell: (oldValue, newValue, row, column) => { 
            
        }
      });

    render() {
        return ( <Grid>
            <Form inline style = {{marginBottom:150}}>
                <FormGroup style={{paddingLeft:100}}>
                <h4>Kupujący: <FormControl type="text" value={this.state.value} placeholder={this.state.oldInvoice.buyer} onChange={this.handleChange}/></h4>
                <h4>Adres kupującego: <FormControl type="text" value={this.state.value} placeholder={this.state.oldInvoice.buyerAddress} onChange={this.handleChange}/></h4>
                <h4>NIP: <FormControl type="text" value={this.state.value} placeholder={this.state.oldInvoice.buyerNIP} onChange={this.handleChange}/></h4>
                </FormGroup>
                <FormGroup style={{paddingLeft:150}}>
                <h4>Sprzedający: <FormControl type="text" value={this.state.value} placeholder={this.state.oldInvoice.seller} onChange={this.handleChange}/></h4>
                <h4>Adres Sprzedawcy: <FormControl type="text" value={this.state.value} placeholder={this.state.oldInvoice.sellerAddress} onChange={this.handleChange}/></h4>
                <h4>NIP: <FormControl type="text" value={this.state.value} placeholder={this.state.oldInvoice.sellerNIP} onChange={this.handleChange}/></h4>
                </FormGroup>
            </Form>
            <BootstrapTable keyField='idInvoice' data = {this.state.oldItems} columns = {this.state.columns} cellEdit = {this.cellEdit}/>
            </Grid>)
    }
}

