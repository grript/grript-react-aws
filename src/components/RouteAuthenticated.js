import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink, Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { Auth } from "aws-amplify";
import { fakeAuth } from './Login'; 

// ({ component: Component, layout: Layout, ...rest })


class RouteAuthenticated extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   boolVar: false,
    // };
  }

  render() {
    const Layout = this.props.layout;
    const Component = this.props.component;
    return (
      <Layout>
        <Route render={props => (
          <Component {...props}/>
        )}/>
      </Layout>  
    )  
  }  
}

export default RouteAuthenticated;