import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  NavLink, Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { ColorBgSidebarMobile } from './Variables'; 


const NavSidebar = () => {
  return (
      <StyledNavSidebar className="nav-primary-sidebar" aria-label="Primary Navigation on the sidebar" bgColor={ColorBgSidebarMobile}>
        <NavSidebarRaw />
      </StyledNavSidebar>
  );
}



export default NavSidebar;



// 'css in js' styling 
const MainNavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;
const MainNavLink = styled.li`
  margin: 0 1em;
  a { 
    color: #fff; 
    text-decoration: none;
  }
`;

const StyledNavSidebar = styled.nav`
  position: relative;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      margin: 0;
      padding: 0;
      a {
        padding: 8px 2em;
        display: block;
        &:hover {
          background-color: #555;
        }
      }
    }
  }
  
`;

const NavSidebarRaw = () => {
  return (
    <ul>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/about">About</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/blog">Blog</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/contact">Contact</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/admin">Admin</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/demos">Demos</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/layout-sidebar-drawer">Layout with Sidebar as Drawer</NavLink></MainNavLink>
    </ul>
  );
}