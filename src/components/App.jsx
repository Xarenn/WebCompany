import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect} from 'react-redux';
import logo from '../logo.svg';
import '../css/App.css';
import LoginPage from './LoginPage';
import Home from './Home';
import CustomNavBar from './CustomNavBar';
import Account from './Account/Account';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
        return (
          <Router>
          <div>
            <CustomNavBar />
            <Route exact path="/" component={ Home } />
            <Route exact path="/LoginPage" component={ LoginPage } />
            <Route exact path="/Account" component={ Account } />
            </div>
        </Router>
        );
      }
}

export default App;
