import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup, Form, Label,
    Grid, Jumbotron, Button} from 'react-bootstrap';
import {store} from '../../index';
import { connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Redirect } from 'react-router-dom';
import {createPdf} from './invoices/InvoicePdf';
import InvoiceEdit from './invoiceEdit';

const API = "http://127.0.0.1:8081/api"


function mapStateToProps(state) {
    return {
        user: state.user
    }
};

class Invoice extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        redirect: false,
        edit: false,
        idInvoice: this.props.user.idInvoice,
        invoice: {},
        invoiced: this.props.editinvoice === "" || this.props.editinvoice == null ?
        { 
            "id": 2,
            "userId": 2,
            "value": 2,
            "seller": "SPRZEDAWCA",
            "sellerAddress": "ADDRESS SPRZEDAWCY",
            "sellerNIP": "235243345",
            "phoneNumber": "3246324235235",
            "buyer": "BUYER",
            "buyerAddress": "BUYER ADDRESS",
            "buyerNIP": "N68658568568IP",
            "dateInvoice": "DATA WYSTAWIENIA",
            "datePayment": "DATA PLATNOSCI",
            "paymentMethod": "cash",
            "items": [
                {
                    "name": "Name 0",
                    "id": 0,
                    "idInvoice": 0,
                    "amount": 0,
                    "priceNet": 0,
                    "vat": 0,
                    "vatAmount": 0,
                    "priceBrutto": 0
                },
                {
                    "name": "Name 1",
                    "id": 0,
                    "idInvoice": 1,
                    "amount": 1,
                    "priceNet": 1,
                    "vat": 1,
                    "vatAmount": 1,
                    "priceBrutto": 1
                },
                {
                    "name": "Name 2",
                    "id": 0,
                    "idInvoice": 2,
                    "amount": 2,
                    "priceNet": 2,
                    "vat": 2,
                    "vatAmount": 2,
                    "priceBrutto": 2
                }
            ]
        } : this.props.editinvoice
    };

    componentWillMount() {
        window.onunload = (ev) => {
            this.setRedirect();
        }
        let idInv = this.props.user.idInvoice
        try { 
        axios.get(API+"/invoice?id="+idInv, {
            headers: { 
                Authorization: "Auth "+this.props.user.token
            }
        })
        .then(response => {
          const invoice = response.data;
          this.setState({invoice});
        })
        }catch(error) {
            console.log(error);
        }
    }

    importToPdf = () => {
        createPdf(this.state.invoiced);
    }

    editInvoice = (invoice) => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    render() {
        var columns = [{text: "nr", dataField: "idInvoice"},{text: "name", dataField: "name"},
         {text: "amount", dataField:"amount"}, {text: "price Netto", dataField: "priceNet"}
         , {text: "vat", dataField: "vat"}, {text: "vat amount", dataField:"vatAmount"},
          {text:"price brutto", dataField:"priceBrutto"}];
        let items = this.state.invoiced.items;
        
        return (<Jumbotron style={{margin:100}}><Grid>
            <Button bsStyle="primary" onClick={() => this.editInvoice()}> {!this.state.edit ? "Edit Invoice" : "Show Invoice"}</Button>
            <h2 style={{marginLeft:200, marginBottom:50}}><Label>FAKTURA VAT NR {this.state.idInvoice} </Label></h2>
            {this.state.edit ? <InvoiceEdit invoice={this.state.invoiced} items = {items} columns = {columns} /> : 
            <Grid>
            <Form inline style = {{marginBottom:150}}>
                <FormGroup style={{paddingLeft:100}}>
                <h4>Kupujący: {this.state.invoiced.buyer}</h4>
                <h4>Adres kupującego: {this.state.invoiced.buyerAddress}</h4>
                <h4>NIP: {this.state.invoiced.buyerNIP}</h4>
                </FormGroup>
                <FormGroup style={{paddingLeft:150}}>
                <h4>Sprzedający: {this.state.invoiced.seller}</h4>
                <h4>Adres Sprzedawcy: {this.state.invoiced.sellerAddress}</h4>
                <h4>NIP: {this.state.invoiced.sellerNIP}</h4>
                </FormGroup>
            </Form>
            <BootstrapTable keyField='idInvoice' data = {items} columns = {columns} /></Grid>
            }
            {!this.state.edit ? <Button bsStyle="primary" onClick={() => this.importToPdf()}>Import to Pdf</Button> : ""}
            </Grid></Jumbotron>)
    }
}


export default connect(mapStateToProps)(Invoice);