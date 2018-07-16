import React, { Component } from 'react';
import { FormControl, FormGroup, Form, Label,
    Grid, Jumbotron, Button} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

export default class InvoiceEdit extends Component {

    state = {
        oldInvoice: this.props.invoice,
        columns: this.props.columns,
        oldItems: this.props.items,
        newItems: null,
        buyer: "",
        buyerAddress: "",
        buyerNIP: "",
        seller: "",
        sellerAddress: "",
        sellerNIP: ""
    }

    cellEdit = cellEditFactory({
        mode: 'click',
        afterSaveCell: (oldValue, newValue, row, column) => { 
            let newItems = this.state.oldItems;
            if(column.dataField === "idInvoice") { console.log("failed edit") }

            var columnId = column.dataField;
            newItems[row.idInvoice][columnId] = newValue;

            this.state.newItems = newItems;
        }
    });

    buyerChange = () => {
        let buyer = this.state.buyer.value;
        if(buyer.length > 0) {
            this.state.oldInvoice.buyer = buyer;
        }
    }

    buyerAddressChange = () => {
        let adress = this.state.buyerAddress.value;
        if(adress.length > 0) {    
           this.state.oldInvoice.buyerAddress = adress;
        }
    }

    buyerNIPChange = () => {
        let nip = this.state.buyerNIP.value;
        if(nip.length > 0) {
            this.state.oldInvoice.buyerNIP = nip;
        }
    }

    sellerChange = () => {
        let seller = this.state.seller.value;
        if(seller.length > 0 ) {
            this.state.oldInvoice.seller = seller;
        }
    }

    sellerAddressChange = () => {
        let adress = this.state.sellerAddress.value;
        if(adress.length > 0) {
            this.state.oldInvoice.sellerAddress = adress;
        }
    }

    sellerNIPChange = () => {
        let NIP = this.state.sellerNIP.value;
        if(NIP.length > 0) {
            this.state.oldInvoice.sellerNIP = NIP;
        }
    }

    saveInvoice() {
        // send to the server save api -->>
        console.log(this.state.oldInvoice);
    }

    render() {
        return ( <Grid>
            <Form inline style = {{marginBottom:150}}>
                <FormGroup style={{paddingLeft:100}}>
                <h4>Kupujący: <FormControl type="text" placeholder={this.state.oldInvoice.buyer} onChange={this.buyerChange} inputRef={input => this.state.buyer = input}/></h4>
                <h4>Adres kupującego: <FormControl type="text" inputRef={input => this.state.buyerAddress = input} placeholder={this.state.oldInvoice.buyerAddress} onChange={this.buyerAddressChange}/></h4>
                <h4>NIP: <FormControl type="text" inputRef={input => this.state.buyerNIP = input} placeholder={this.state.oldInvoice.buyerNIP} onChange={this.buyerNIPChange}/></h4>
                </FormGroup>
                <FormGroup style={{paddingLeft:150}}>
                <h4>Sprzedający: <FormControl type="text" inputRef={input => this.state.seller = input} placeholder={this.state.oldInvoice.seller} onChange={this.sellerChange}/></h4>
                <h4>Adres Sprzedawcy: <FormControl type="text" inputRef={input => this.state.sellerAddress = input} placeholder={this.state.oldInvoice.sellerAddress} onChange={this.sellerAddressChange}/></h4>
                <h4>NIP: <FormControl type="text" inputRef={input => this.state.sellerNIP = input} placeholder={this.state.oldInvoice.sellerNIP} onChange={this.sellerNIPChange}/></h4>
                </FormGroup>
            </Form>
            <BootstrapTable keyField='idInvoice' data = {this.state.oldItems} columns = {this.state.columns} cellEdit = {this.cellEdit}/>
            <Button bsStyle="primary" style={{}} onClick={() => this.saveInvoice()}>Save Invoice</Button>
            </Grid>)
    }
}

