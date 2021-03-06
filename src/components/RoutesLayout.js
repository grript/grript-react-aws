import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink, Link,
  Switch,
  Redirect
} from 'react-router-dom';


import LayoutSimple from './LayoutSimple';
import LayoutNavSimple from './LayoutNavSimple';
import LayoutNavDropdown from './LayoutNavDropdown';
import LayoutNavLeftDrawer from './LayoutNavLeftDrawer';
import LayoutSidebarLeftDrawerAndNavDropdown from './LayoutSidebarLeftDrawerAndNavDropdown';
import Layout1ColContentDynamic from './Layout1ColContentDynamic';
import LayoutDefault from './LayoutDefault';
import RouteAuthenticator from './RouteAuthenticator';
import User from './User';
import RouteLayout from './RouteLayout';
import NoMatch from './NoMatch';
import LoginCognito from './LoginCognito';

const RoutesLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={LayoutNavSimple} />
        <Route path="/about" component={LayoutNavDropdown} />
        <Route path="/blog" component={LayoutNavSimple} />
        <Route path="/contact" component={LayoutNavSimple} />
        <Route path="/login" component={LayoutNavSimple} />
        <Route path="/demos" component={LayoutNavSimple} />
        <Route path="/layout-simple" component={LayoutSimple} />
        <Route path="/layout-nav-simple" component={LayoutNavSimple} />
        <Route path="/layout-nav-dropdown" component={LayoutNavDropdown} />
        <Route path="/layout-nav-as-left-drawer" component={LayoutNavLeftDrawer} />
        <Route path="/layout-sidebar-left-drawer-and-nav-dropdown" component={LayoutSidebarLeftDrawerAndNavDropdown} />
        <Route path="/learn-redux" component={Layout1ColContentDynamic} />
        <Route path="/teams" component={Layout1ColContentDynamic} />
        <RouteLayout path="/login-cognito" layout={LayoutDefault} component={LoginCognito} />
        <RouteAuthenticator path="/user" component={User} layout={LayoutDefault}/>
        <RouteLayout layout={LayoutDefault} component={NoMatch} />
      </Switch>
    </div>

  );
}
export default RoutesLayout;