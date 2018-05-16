import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect} from 'react-redux';
import { store } from '../../index'

function mapStateToProps(state) {
    return {
        user: state.user
    }
};

class Account extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(store.getState());
        if(this.props.user.authenticated === true){
                return( 
                    <div>
                    <h1>Account</h1>
                    <p> Account -> name: {this.props.user.email} </p>
                    <Button bsStyle="primary" onClick={this.handleClick}> Get Name
                    </Button>
                    </div>
                )
            }
            else{
                return( 
                    <div>
                    <h1>Please login</h1>
                    </div>
                )
            }
        }
    
}

export default connect(mapStateToProps)(Account);