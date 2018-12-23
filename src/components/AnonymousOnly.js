import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// needs review
class AnonymousOnly extends React.Component {
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
    if (!this.props.userIsAuthenticated) {
      return (
        <Fragment>
          {this.props.children}
        </Fragment>
      )  
    }
    
    return (
      <div>null</div>
    )  
  }  
}

  const mapStateToProps = state => {
    return {
      userIsAuthenticated: state.userIsAuthenticated,
      userCheckingSession: state.userCheckingSession
    };
  }
    
    
  export default connect(mapStateToProps)(AnonymousOnly);

  

// needs review
  // constructor(props){
  //   super(props);
  //   this.userHasAuthenticated = this.userHasAuthenticated.bind(this)
  //   this.state = {
  //     isAuthenticated: false,
  //     isAuthenticating: true
  //   };
  // }

  // userHasAuthenticated = authenticated => {
  //   this.setState({ isAuthenticated: authenticated });
  // }

  // async componentDidMount() {
  //   try {
  //     await Auth.currentSession();
  //     this.userHasAuthenticated(true);
  //     console.log(Auth.currentCredentials());
  //     console.log('current session', Auth.currentSession());
  //     Auth.currentAuthenticatedUser()
  //       .then(user => console.log(user))
  //       .catch(err => console.log(err));
  //   }
  //   catch(e) {
  //     if (e !== 'No current user') {
  //       console.log(e);
  //     }
  //   }
  //   this.setState({ isAuthenticating: false });
  // }

  // render() {
    
  //   if (!this.state.isAuthenticated) {
  //     return (
  //       <Fragment>
  //         {this.props.children}
  //       </Fragment>  
  //     )  
  //   }

  //   return null;
  // }  
//}

// export default AnonymousOnly;
