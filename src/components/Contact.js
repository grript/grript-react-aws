import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

const Contact = ({ match }) => {
  return (
      <div className="contact">
          <h1 className="page-title">Contact Us</h1>
          <ul>
              <li><Link to={`${match.url}/sales`}>Sales</Link></li>
              <li><Link to={`${match.url}/support`}>Support</Link></li>
              <li><Link to={`${match.url}/customer-service`}>Customer Service</Link></li>
          </ul>
          <div>
            <Route path={`${match.path}/sales`} render={() => { return <h1>Sales Page</h1> }}/>
            <Route path={`${match.path}/support`} render={() => { return <h1>Support Page</h1> }}/>
            <Route path={`${match.path}/customer-service`} render={() => { return <h1>Customer Service Page</h1> }}/>
          </div>
      </div>
  );
}
export default Contact;