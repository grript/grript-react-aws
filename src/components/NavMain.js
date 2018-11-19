import React from 'react';
import styled from "styled-components"

import {
  BrowserRouter as Router,
  Route,
  NavLink, Link,
  Switch,
  Redirect
} from 'react-router-dom';

import { ColorBgSidebarMobile } from './Variables'; 

// const RenderedComponentDemo = () => <ComponentDemo>Hello Demos!</ComponentDemo>;

const NavMain = () => {
  return (
    <ul className="nav-primary" aria-label="Primary Navigation">
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/about">About</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/blog">Blog</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/contact">Contact</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/admin">Admin</NavLink></MainNavLink>
      <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/demos">Demos</NavLink></MainNavLink>
    </ul>
  );
}
export default NavMain;

// 'css in js' styling 

const MainNavLink = styled.li`
  // margin: 8px 0;
  // a { 
  //   color: #fff; 
  //   text-decoration: none;
  // }

  // @media (min-width: 900px) {
  //   // margin: 0 1em;
  // }
`;

const MainNavTag = styled.nav`
  // position: relative;
  // ul {
  //   list-style-type: none;
  // }
  // background-color: ${props => props.bgColor};
`;

// variation: NavMainSidebar
export const NavMainSidebar = () => {
  return (
      <StyledNavMainSidebar bgColor={ColorBgSidebarMobile}>
        <NavMain />
      </StyledNavMainSidebar>
  );
}

const StyledNavMainSidebar = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      margin: 0;
      a {
        color: #fff;
        display: block;
        text-decoration: none;
        padding: 6px 1.5em;
        &:hover {
          background-color: #666;
        }
      }
    }
  }
`;
