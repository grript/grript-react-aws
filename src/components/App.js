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
import HelloGoodMorning from './HelloGoodMorning';
import Contact from './Contact';
import Home from './Home';


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
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/hello" component={Hello} />
              <Route path="/hello/goodmorning" component={HelloGoodMorning} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </main>
        </div>
      </Router>  
    );
  }
}

export default App;
