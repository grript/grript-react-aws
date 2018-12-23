import React from 'react';
import {
  NavLink,
} from 'react-router-dom';
import UserLogout from './UserLogout';


const NavMain = () => {
  return (
    <ul className="nav-primary" aria-label="Primary Navigation">
      <li><NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink></li>
      <li><NavLink exact={true} activeClassName='is-active' to="/about">About</NavLink></li>
      <li><NavLink exact={true} activeClassName='is-active' to="/blog">Blog</NavLink></li>
      <li><NavLink exact={true} activeClassName='is-active' to="/contact">Contact</NavLink></li>
      <li><NavLink exact={true} activeClassName='is-active' to="/admin">Admin</NavLink></li>
      <li><NavLink exact={true} activeClassName='is-active' to="/demos">Demos</NavLink></li>
      <li><UserLogout /></li>
    </ul>
  );
}
export default NavMain;
