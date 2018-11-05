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

import NavMain from './NavMain';
import NavMainIcon from './NavMainIcon';
import RoutesTopLevel from './RoutesTopLevel';


class App extends Component {
  render() {
    return (
      <Router>      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <NavMain />
            <NavMainIcon />

          </header>
          <div className="header-height"></div>
          <section role="navigation" className="nav-sidebar">
             
          </section>
          <main>
            <div className="container center container-mobile">
              <RoutesTopLevel />
            </div>  
          </main>
        </div>
      </Router>  
    );
  }
}

export default App;
