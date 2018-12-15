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

import RoutePrivate from './RoutePrivate';
import Login, { fakeAuth } from './Login'; 
import Admin from './Admin';
import Demos from './Demos';
import LayoutSimple from './LayoutSimple';
import LayoutNavSimple from './LayoutNavSimple';

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
        <Route path="/layout-simple" component={LayoutSimple} />
        <Route path="/layout-with-header" component={LayoutNavSimple} />        
        <RoutePrivate authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
      </Switch>
    </div>

  );
}
export default RoutesTopLevel;