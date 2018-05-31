import React, { Component } from 'react';
import AuthAccount from './AuthAccount';
import { connect} from 'react-redux';

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
        if(this.props.user.authenticated === true){
                return( 
                    <AuthAccount/>
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