import React, { Component } from 'react';
import { FormGroup, Form, Row, Col, Label, Grid, Jumbotron, Button } from 'react-bootstrap';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import "../css/Home.css";

export default class Home extends Component {

    constructor(param) {
        super(param)
        this.state = {
            isToggleOn: true,
            isLoggedIn: false
        }
    }

    showLabel() {
        if(this.state.isToggleOn){
            return( 
                <div className="center">
                <ReactCssTransitionGroup 
                    transitionName="AppearTransition"
                    transitionEnter={true}
                    transitionEnterTimeout={599}
                    transitionLeave={false}
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    >
                    <h2>Complex IT</h2>
                    </ReactCssTransitionGroup>
                </div>
            )
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <Grid style={{float:"center"}}>
             <Jumbotron style={{float: 'center', marginBottom:100}}>
                <h1>Complex FF</h1>
                <p> Lorem impsum dada </p>
                <Button bsStyle="primary" onClick={this.handleClick}> Get In
                 </Button>
                 {this.showLabel()}

            </Jumbotron>  
            <Grid>
                <Row className="show-grid">
                <Col sm={6} md={3}>
                  <Jumbotron>
                    <h3>1 column</h3>
                  </Jumbotron>
                </Col>
                <Col sm={6} md={3}>
                <Jumbotron>
                    <h3>2 column</h3>
                  </Jumbotron>>
                </Col>
                <Col sm={6} md={3}>
                <Jumbotron>
                    <h3>3 column</h3>
                  </Jumbotron>
                </Col>
                <Col sm={6} md={3}>
                <Jumbotron>
                    <h3>4 column</h3>
                  </Jumbotron>
                </Col>
                </Row>
            </Grid>
            </Grid>
        )
    }
}