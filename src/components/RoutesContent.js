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
import ContentSimple from './ContentSimple';

const RoutesContent = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/demos" component={Demos} />
        <Route path="/layout-with-header" component={ContentSimple} />
        <Route path="/layout-with-nav-dropdown" component={ContentSimple} />
        <Route path="/layout-left-drawer" component={ContentSimple} />
        <PrivateRoute authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
      </Switch>
    </div>

  );
}
export default RoutesContent;