import React from 'react';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  NavLink, Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { Auth } from "aws-amplify";
import LayoutDefault from './LayoutDefault'; 
import AccessDenied from './AccessDenied'; 
import UserSignin from './UserSignin'; 




class RouteAuthenticator extends React.Component {
  constructor(props){
    super(props);

  }



  componentDidMount() {

      // Auth.currentSession();
      // // this.userHasAuthenticated(true);
      // console.log(Auth.currentCredentials());
      // console.log('current session', Auth.currentSession());
      // Auth.currentAuthenticatedUser()
      //   .then(user => console.log(user))
      //   .catch(err => console.log(err));


  }

  render() {

    const Layout = this.props.layout;
    const Component = this.props.component;
    console.log('router-authenticator', this.props);
    if (this.props.userCheckingSession) {
      return (
        <LayoutDefault>
          Checking user session....
   
        </LayoutDefault>
      )
    }
    if (this.props.userIsAuthenticated) {
      return (
        <Layout>
          <Route render={props => (
            <Component {...props}/>
          )}/>
        </Layout>  
      )  
    }
    
    return (
      <LayoutDefault>
        <AccessDenied />
 
      </LayoutDefault>
    )

  }  
}

const mapStateToProps = state => {
  return {
    userIsAuthenticated: state.userIsAuthenticated,
    userCheckingSession: state.userCheckingSession
  };
}

export default connect(mapStateToProps)(RouteAuthenticator);
