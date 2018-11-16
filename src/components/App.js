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

import { ClassLayoutMainDesktop } from './Variables';
// import LayoutContainer1 from  './LayoutContainer1';
import LayoutContainer2 from  './LayoutContainer2';

const class_name = ClassLayoutMainDesktop;

class App extends Component {
  render() {
    return (
      <Router>      
        <div className={`App  ${class_name}`}>
          <LayoutContainer2 />
        </div>
      </Router>  
    );
  }
}

export default App;
