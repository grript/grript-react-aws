import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import LayoutContainer2 from './LayoutContainer2';
import LayoutSimple from './LayoutSimple';
import LayoutWithHeader from './LayoutWithHeader';
import LayoutWithNavDropdown from './LayoutWithNavDropdown';
import LayoutNavLeftDrawer from './LayoutNavLeftDrawer';
import LayoutSidebarDrawerLeft from './LayoutSidebarDrawerLeft';

const RoutesLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={LayoutWithHeader} />
        <Route path="/about" component={LayoutWithNavDropdown} />
        <Route path="/blog" component={LayoutWithHeader} />
        <Route path="/contact" component={LayoutWithHeader} />
        <Route path="/login" component={LayoutWithHeader} />
        <Route path="/demos" component={LayoutWithHeader} />
        <Route path="/layout-simple" component={LayoutSimple} />
        <Route path="/layout-with-header" component={LayoutWithHeader} />
        <Route path="/layout-with-nav-dropdown" component={LayoutWithNavDropdown} />
        <Route path="/layout-left-drawer" component={LayoutNavLeftDrawer} />
        <Route path="/layout-sidebar-drawer" component={LayoutSidebarDrawerLeft} />
        <Route path="/layout2" component={LayoutContainer2} />
      </Switch>
    </div>

  );
}
export default RoutesLayout;