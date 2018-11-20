import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink, Link,
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
        <Route path="/layout-nav-simple" component={ContentSimple} />
        <Route path="/layout-nav-dropdown" component={ContentSimple} />
        <Route path="/layout-nav-as-left-drawer" component={ContentSimple} />
        <Route path="/layout-sidebar-left-drawer-and-nav-dropdown" component={ContentSimple} />
        <PrivateRoute authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}
export default RoutesContent;