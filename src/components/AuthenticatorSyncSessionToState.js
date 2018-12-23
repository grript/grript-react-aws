import React from 'react';
import { connect } from 'react-redux';
import { Auth } from "aws-amplify";
import { userIsAuthenticated, stopCheckingUserSession } from '../redux/actions/index';


class AuthenticatorSyncSessionToState extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log('rocks999');
    try {
      console.log('rocks9988');
      await Auth.currentSession();
      console.log('rocks998555');
      this.props.setUserAsAuthenticated();
      this.props.stopCheckingUserSession();  
      console.log(Auth.currentCredentials());
      console.log('current session rocks8', Auth.currentSession());
      Auth.currentAuthenticatedUser()
        .then(user => console.log(user))
        .catch(err => console.log(err));
    }
    catch(e) {
      
      console.log('rocks777');
      if (e !== 'No current user') {
        console.log(e);
      }
      this.props.stopCheckingUserSession(); 
    }  
     
  }

  render () {
    return null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserAsAuthenticated: () => {
      dispatch(userIsAuthenticated());
    },
    stopCheckingUserSession: () => {
      dispatch(stopCheckingUserSession());
    }
  }
}


export default connect(null, mapDispatchToProps)(AuthenticatorSyncSessionToState);
