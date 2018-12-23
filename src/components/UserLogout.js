import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthenticatorRedux from './AuthenticatorRedux';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import { logout, stopCheckingUserSession } from '../redux/actions/index';

// need review
class UserLogout extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = async event => {
    console.log('attempting to log out');
    try {
      console.log('trying to log out...');
      await Auth.signOut();  // clear user session
      console.log('successfully logged out');
      this.props.logout(); // updates the global state
      this.props.stopCheckingUserSession();  
    }
    catch(e) {
      console.log('error');
      console.log(e);
      this.props.stopCheckingUserSession(); 
    }
  }

  render() {
    return (
      <AuthenticatorRedux>
        <NavLink onClick={this.handleClick} exact={true} activeClassName='is-active' to="/">Logout</NavLink>
      </AuthenticatorRedux>
    );
  }  
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    },
    stopCheckingUserSession: () => {
      dispatch(stopCheckingUserSession());
    }
  }
}


export default connect(null, mapDispatchToProps)(UserLogout);


