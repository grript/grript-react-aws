import React, { Component } from 'react';

import './App.css';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import { ClassLayoutMainDesktop } from './Variables';
import RoutesLayout from './RoutesLayout';

const class_name = ClassLayoutMainDesktop;

class App extends Component {
  render() {
    return (
      <Router>      
        <div className={`App  ${class_name}`}>

          <RoutesLayout />
        </div>
      </Router>  
    );
  }
}

export default App;
