import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import MainNav from './MainNav';
import RoutesTopLevel from './RoutesTopLevel';


class App extends Component {
  render() {
    return (
      <Router>      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <MainNav /> 

          </header>
          <main>
            <RoutesTopLevel />
          </main>
        </div>
      </Router>  
    );
  }
}

export default App;
