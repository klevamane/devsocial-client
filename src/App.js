import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Landing from './components/layouts/Landing';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';

// helper
import { setTokenForEveryRequest } from './helpers/helpers';

// actions
import { setCurrentUser } from './actions/authActions';
//store
import store from './store';

// check for token in local storage
if (localStorage.jwtDevSocial) {
  // set auth token header
  setTokenForEveryRequest(localStorage.jwtDevSocial);
  // Decode the token to obtain user details and token expiry
  const decoded = jwt_decode(localStorage.jwtDevSocial)
  // set current user with the decoded data
  // note that the store can dispatch action also
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/login" component={Login}></Route>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
