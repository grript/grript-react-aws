import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';

import PrivateRoute from './PrivateRoute';
import Login, { fakeAuth } from './Login'; 
import Admin from './Admin';
import Demos from './Demos';
import LayoutContainer2 from './LayoutContainer2';

const RoutesTopLevel = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/demos" component={Demos} />
        <Route path="/layout2" component={LayoutContainer2} />
        <PrivateRoute authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
      </Switch>
    </div>

  );
}
export default RoutesTopLevel;