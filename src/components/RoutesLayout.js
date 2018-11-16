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

const RoutesLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={LayoutWithHeader} />
        <Route path="/about" component={LayoutWithHeader} />
        <Route path="/blog" component={LayoutWithHeader} />
        <Route path="/contact" component={LayoutWithHeader} />
        <Route path="/login" component={LayoutWithHeader} />
        <Route path="/demos" component={LayoutWithHeader} />
        <Route path="/layout-simple" component={LayoutSimple} />
        <Route path="/layout-with-header" component={LayoutWithHeader} />
        <Route path="/layout2" component={LayoutContainer2} />
      </Switch>
    </div>

  );
}
export default RoutesLayout;