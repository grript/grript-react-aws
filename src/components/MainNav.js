import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

const MainNav = () => {
  return (
      <nav className="nav-primary" aria-label="Primary Navigation">
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
  );
}
export default MainNav;