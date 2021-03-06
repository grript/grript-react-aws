import React from 'react';
import styled from 'styled-components';
import DropdownComposite from './DropdownComposite';
import {
  BrowserRouter as Router,
  Route,
  NavLink, Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { ColorGrayDark } from './Variables';

class Login extends React.Component {
  
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false
    }
    // binding 'this'
    this.login = this.login.bind(this);
  }

  login() {

    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div className="jumbotron">
          <h1 className="display-3">Login required</h1>
          <p className="lead">You must log in to view the page at {from.pathname}.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" onClick={this.login} role="button">Login</a>
          </p>
      </div>
    )
  }
}

export default Login;
/* A fake authentication function */
export const fakeAuth = {

  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
     setTimeout(cb, 100)
  },
}



export const LoginIcon = () => {
  return (
    <StyledLoginIcon className="login-icon-trigger icon">Login</StyledLoginIcon>
  );
}

const StyledLoginIcon = styled.span`
  display: block;
  background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojNTQ2RTdBOyIgZD0iTTQxNS4zNDQsMjc2Ljg4NWMtNDEuMjM3LDAtNzQuNjY3LDMzLjQyOS03NC42NjcsNzQuNjY3djIxLjMzM2MwLDUuODkxLDQuNzc2LDEwLjY2NywxMC42NjcsMTAuNjY3ICBjNS44OTEsMCwxMC42NjctNC43NzYsMTAuNjY3LTEwLjY2N3YtMjEuMzMzYzAtMjkuNDU1LDIzLjg3OC01My4zMzMsNTMuMzMzLTUzLjMzM3M1My4zMzMsMjMuODc4LDUzLjMzMyw1My4zMzN2MjEuMzMzICBjMCw1Ljg5MSw0Ljc3NiwxMC42NjcsMTAuNjY3LDEwLjY2N2M1Ljg5MSwwLDEwLjY2Ny00Ljc3NiwxMC42NjctMTAuNjY3di0yMS4zMzNDNDkwLjAxMSwzMTAuMzE1LDQ1Ni41ODEsMjc2Ljg4NSw0MTUuMzQ0LDI3Ni44ODV6ICAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQzEwNzsiIGQ9Ik0zMzAuMDExLDM2Mi4yMTloMTcwLjY2N2M1Ljg5MSwwLDEwLjY2Nyw0Ljc3NiwxMC42NjcsMTAuNjY3djEyOCAgYzAsNS44OTEtNC43NzYsMTAuNjY3LTEwLjY2NywxMC42NjdIMzMwLjAxMWMtNS44OTEsMC0xMC42NjctNC43NzYtMTAuNjY3LTEwLjY2N3YtMTI4ICBDMzE5LjM0NCwzNjYuOTk0LDMyNC4xMTksMzYyLjIxOSwzMzAuMDExLDM2Mi4yMTl6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBkPSJNMjk4LjAxMSw1MDAuODg1di0xMjhjMC4wNzEtMTMuODU3LDkuMDUzLTI2LjA5MywyMi4yNTEtMzAuMzE1YzAuODMxLTcuNjY0LDIuNTg2LTE1LjIsNS4yMjctMjIuNDQzICBjLTEuODI2LTUuNTgtMy4yNTItMTEuMjg0LTQuMjY3LTE3LjA2N2MxNy40ODgtMTQuNTA1LDI4Ljc0NC0zNS4xNjgsMzEuNDQ1LTU3LjcyOGMtMC4zNzktMy44NDcsMC41MjktNy43MTEsMi41ODEtMTAuOTg3ICBjMy4zMjYtMC44MzMsNi4wNDktMy4yMTUsNy4zMTctNi40YzYuMTUzLTE0Ljg2OCwxMC4wMDktMzAuNTg2LDExLjQzNS00Ni42MTNjLTAuMDAxLTAuODctMC4xMDgtMS43MzctMC4zMi0yLjU4MSAgYy0xLjUzLTYuMjI2LTUuMTktMTEuNzIxLTEwLjM0Ny0xNS41MzF2LTU2LjU1NUMzNjEuMDAxLDQ4Ljc1LDMxNC41ODMsMi4zMzIsMjU2LjY2NywwQzE5OC43NSwyLjMzMiwxNTIuMzMyLDQ4Ljc1LDE1MCwxMDYuNjY3ICB2NTYuNTU1Yy01LjE1NiwzLjgxLTguODE3LDkuMzA1LTEwLjM0NywxNS41MzFjLTAuMjEyLDAuODQ0LTAuMzE5LDEuNzExLTAuMzIsMi41ODFjMS40MjQsMTYuMDM1LDUuMjgsMzEuNzYsMTEuNDM1LDQ2LjYzNSAgYzAuOTI0LDMuMDE1LDMuMzQ3LDUuMzM0LDYuNCw2LjEyM2MxLjE3MywwLjU5NywzLjQxMywzLjY5MSwzLjQxMywxMS4yNDNjMi43MTMsMjIuNTg4LDE0LjAwMSw0My4yNywzMS41MzEsNTcuNzcxICBjLTIuMTMzLDEzLjk3My0xMi42NTEsNTAuODE2LTM0LjkwMSw2MC4xMTdMNjIuNjQsMzk0LjY2N2MtMjQuMjkyLDguMDM0LTQyLjc0NywyNy45OTUtNDguODUzLDUyLjg0M2wtMTIuOCw1MS4yICBjLTEuNDQ5LDUuNzEsMi4wMDUsMTEuNTE0LDcuNzE1LDEyLjk2M2MwLjg2LDAuMjE4LDEuNzQ0LDAuMzI4LDIuNjMyLDAuMzI4aDI4OC43NjggIEMyOTguNzQzLDUwOC40NTEsMjk4LjAzNSw1MDQuNjg2LDI5OC4wMTEsNTAwLjg4NXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZBRkFGQTsiIGQ9Ik00MzYuNjc3LDQyNi4yMTljMC0xMS43ODItOS41NTEtMjEuMzMzLTIxLjMzMy0yMS4zMzNjLTExLjc4MiwwLTIxLjMzMyw5LjU1MS0yMS4zMzMsMjEuMzMzICBjMC4wOTUsNy40ODQsNC4xNTYsMTQuMzU1LDEwLjY2NywxOC4wNDh2MTMuOTUyYzAsNS44OTEsNC43NzYsMTAuNjY3LDEwLjY2NywxMC42NjdjNS44OTEsMCwxMC42NjctNC43NzYsMTAuNjY3LTEwLjY2N3YtMTMuOTUyICBDNDMyLjUyMSw0NDAuNTc0LDQzNi41ODIsNDMzLjcwMyw0MzYuNjc3LDQyNi4yMTl6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
  width: 25px;
  height: 25px;
  background-color: #fff;
  background-size: 17px;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 50px;
  margin-left: auto;
  margin-right: 0;
  text-indent: -9999px;
`;

export const LoginCollapsible = () => {
  return (
    <StyledLoginCollapsible className="login-collapsbile"
      colorGrayDark={ColorGrayDark}>
      Login Collapsbile
    </StyledLoginCollapsible>
  );
}

const StyledLoginCollapsible = styled.div`
  margin: 1em;
`;

export const LoginDropdownComposite = () => {
  return (
    <DropdownComposite className="DropdownSearch" 
    trigger={LoginIcon} collapsible={LoginCollapsible} 
    marginLeft={marginLeft}
    marginRight={marginRight} 
    positionRight={positionRight} />
  );
}
const positionRight = '0';
const marginLeft = '0';
const marginRight = '1em';