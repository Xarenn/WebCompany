import React, { Component } from 'react';
import { connect} from 'react-redux';
import { FormControl, FormGroup, Form, Label,
    Grid, Jumbotron, Button} from 'react-bootstrap';

function mapStateToProps(state) {
    return {
        user: state.user
    }
};

class InvoicesByMonth extends Component {
    render() {
        return(<Jumbotron></Jumbotron>)
    }
}

export default connect(mapStateToProps)(InvoicesByMonth);