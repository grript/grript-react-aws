import React from 'react';
import {
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
import ContentSimple from './ContentSimple';
import ReduxDemo from './ReduxDemo';
import TeamsGetAll from './TeamsGetAll';
import LoginCognito from './LoginCognito';

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
        <RoutePrivate authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
        <Route path="/learn-redux" component={ReduxDemo} />
        <Route path="/teams" component={TeamsGetAll} />
        <Route path="/login-cognito" component={LoginCognito} />

      </Switch>
    </div>
  );
}
export default RoutesContent;