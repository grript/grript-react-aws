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
} from 'react-router-dom'

import About from './About';

class App extends Component {
  render() {
    return (
      <Router>      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <nav className="nav-primary" aria-label="Primary Navigation">
              <ul>
                <li><a href="">Hello</a></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="">Contact</a></li>
              </ul>
            </nav>
          </header>
          <main>
            {/* Routes will go here */}
            <Route path="/about" component={About} />
          </main>
        </div>
      </Router>  
    );
  }
}

export default App;
