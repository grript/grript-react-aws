import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink, Link,
  Switch,
  Redirect
} from 'react-router-dom';


const RouteDynamic = ({ component: Component, layout: Layout, ...rest }) => (
  <Layout>
    <Route {...rest} render={props => (
        <Component {...props}/>
    )}/>
  </Layout>
)

export default RouteDynamic;