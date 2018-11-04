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

import About from './About';
import Hello from './Hello';
import Contact from './Contact';

import MainNav from './MainNav';

class App extends Component {
  render() {
    return (
      <Router>      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <MainNav></MainNav> 

          </header>
          <main>
            {/* Routes will go here */}
            <Route path="/about" component={About} />
            <Route path="/hello" component={Hello} />
            <Route path="/contact" component={Contact} />
          </main>
        </div>
      </Router>  
    );
  }
}

export default App;
