import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/CustomNavBar.css'

function mapStateToProps(state) {
    return {
        user: state.user
    }
};


class CustomNavBar extends Component {

    isAuthenticated = () => {
        return this.props.user.authenticated;
    }

    render() {
        return (
          <Navbar inverse collapseOnSelect>
            <Navbar.Toggle/>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Complex</Link>
                </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={3} componentClass={ Link } to="Contact">
                        Contact
                        </NavItem>
                        <NavItem eventKey={4} componentClass={ Link } to="News" >
                        News
                        </NavItem>
                        <NavItem eventKey={5} componentClass={ Link } to="About">
                        About
                        </NavItem>
                        </Nav>
                    {this.isAuthenticated() ?
                     <Nav pullRight>
                        <NavItem eventKey={1} componentClass={ Link } to="Account" href="/Account">
                            Account
                        </NavItem>
                        <NavItem eventKey={2} componentClass={ Link } to="Logout" href="/Logout">
                        Logout
                        </NavItem>
                    </Nav>
                              :
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={ Link } to="LoginPage" href="/LoginPage">
                            Login
                        </NavItem>
                        <NavItem eventKey={2} componentClass={ Link } to="SignUp" href="/Signup">
                            Sign Up
                        </NavItem>
                    </Nav>
                    }
                </Navbar.Collapse>
           </Navbar>
        )
    }
}

export default connect(mapStateToProps)(CustomNavBar);