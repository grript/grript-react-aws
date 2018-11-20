import React from 'react';
import {
  Route,
  NavLink,
} from 'react-router-dom';
import ContactChild from './ContactChild';

const Contact = ({ match }) => {
  return (
      <div className="contact">
          <h1 className="page-title">Contact Us</h1>
          <ul>
              <li><NavLink exact={true} activeClassName='is-active' to={`${match.url}/sales`}>Sales</NavLink></li>
              <li><NavLink exact={true} activeClassName='is-active' to={`${match.url}/support`}>Support</NavLink></li>
              <li><NavLink exact={true} activeClassName='is-active' to={`${match.url}/customer-service`}>Customer Service</NavLink></li>
          </ul>
          <div>
            <Route path={`${match.path}/sales`} render={() => { return <h1>Sales Page</h1> }}/>
            <Route path={`${match.path}/support`} render={() => { return <h1>Support Page</h1> }}/>
            <Route path={`${match.path}/customer-service`} render={() => { return <h1>Customer Service Page</h1> }}/>
            <Route path={`${match.path}/:id`} component={ContactChild} />
          </div>
      </div>
  );
}
export default Contact;