import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Jumbotron, Form, FormGroup, Grid, Table, Button } from 'react-bootstrap';
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
                    <Grid style={{margin:0}}>
                    <Form componentClass="fieldset" inline>     
                    <FormGroup>
                        <Jumbotron>
                    <Table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
                    </Jumbotron>
                    </FormGroup>{' '}
                    <FormGroup style={{paddingLeft: 10, float: 'right', textAlign: 'center'}}>
                        <Jumbotron>
                            Fileds
                        </Jumbotron>
                    </FormGroup>{' '}
                    </Form>
                    </Grid>
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