import React from 'react';
import { NavLink } from 'react-router-dom';
import AnonymousOnly from './AnonymousOnly';


class UserSignin extends React.Component {

  render() {
    return (
      <AnonymousOnly>
        <NavLink exact={true} activeClassName='is-active' to="/login-cognito">Sign in</NavLink>
      </AnonymousOnly>  
    );
  }  
}



export default UserSignin;