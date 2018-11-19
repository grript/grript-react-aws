import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink, Link,
  Switch,
  Redirect
} from 'react-router-dom';

import { fakeAuth } from './Login'; 

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute;