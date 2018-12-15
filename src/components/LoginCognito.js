import React from 'react';
import styled from 'styled-components';
import { Auth } from "aws-amplify";

class LoginCognito extends React.Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log('attempting to log in');
  // }
  handleSubmit = async event => {
    event.preventDefault();
    console.log('attempting to log in');
    try {
      await Auth.signIn(this.state.email, this.state.password);
      console.log('logged in');
      alert("Logged in");
    } catch (e) {
      alert(e.message);
      console.log('error in logging in');
    }
  }

  validateForm() {
    return undefined !== this.state.email && this.state.email.length > 0 && undefined !== this.state.password && this.state.password.length > 0;
  }

  render () {
    return (
      <div className="login-form">
        <h1>Login Cognito</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <StyledLabel>Email</StyledLabel>
            <StyledInputEmail
              autoFocus
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange} />
          </div>
          <div>
            <StyledLabel>Password</StyledLabel>
            <StyledInputPassword
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange} />
          </div>
          <button disabled={!this.validateForm()} type="submit">
            Login  
          </button>  
        </form>  
      </div>
    );
  }
  
}

export default LoginCognito;

const StyledLabel = styled.label`
  max-width: 100%;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
  display: block;
`;
const StyledInputEmail = styled.input`
  max-width: 100%;
  font-size: 16px;
  padding: 5px 10px;
  margin-bottom: 1em;
`;
const StyledInputPassword = styled.input`
  max-width: 100%;
  font-size: 16px;
  padding: 5px 10px;
  margin-bottom: 1em;
`;