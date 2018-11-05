import React from 'react';
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

import PrivateRoute from './PrivateRoute';
import Login, { fakeAuth } from './Login'; 
import Admin from './Admin';
import Demos from './Demos';

const RoutesTopLevel = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/hello" component={Hello} />
        <Route path="/hello/goodmorning" component={HelloGoodMorning} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/demos" component={Demos} />
        <PrivateRoute authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
      </Switch>
    </div>

  );
}
export default RoutesTopLevel;