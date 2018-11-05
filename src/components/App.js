import React, { Component } from 'react';

import './App.css';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './Header';
import RoutesTopLevel from './RoutesTopLevel';


class App extends Component {
  render() {
    return (
      <Router>      
        <div className="App">
          <Header />
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
