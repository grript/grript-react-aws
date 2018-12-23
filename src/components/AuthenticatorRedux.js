import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// needs review
class AuthenticatorRedux extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    if (this.props.userCheckingSession) {
      return (
        <Fragment>
          Checking user session...
        </Fragment>
      )
    }
    if (this.props.userIsAuthenticated) {
      return (
        <Fragment>
          {this.props.children}
        </Fragment>
      )  
    }
    
    return (
      <div>not authenticated</div>
    )  
  }  
}

const mapStateToProps = state => {
  return {
    userIsAuthenticated: state.userIsAuthenticated,
    userCheckingSession: state.userCheckingSession
  };
}
  
  
export default connect(mapStateToProps)(AuthenticatorRedux);
