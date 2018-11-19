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


const NavSimple = () => {
  return (
      <MainNavTag className="nav-primary" aria-label="Primary Navigation" bgColor={ColorBgSidebarMobile}>
        <MainNavUl>
          <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink></MainNavLink>
          <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/about">About</NavLink></MainNavLink>
          <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/blog">Blog</NavLink></MainNavLink>
          <MainNavLink><NavLink exact={true} activeClassName='is-active' to="/contact">Contact</NavLink></MainNavLink>
        </MainNavUl>
      </MainNavTag>
  );
}



export default NavSimple;

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

const MainNavTag = styled.nav`
  position: relative;
`;