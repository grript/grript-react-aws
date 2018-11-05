import React from 'react';
import styled from "styled-components"

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import ColorBgMobileSidebar from './Variables'; 

// const RenderedComponentDemo = () => <ComponentDemo>Hello Demos!</ComponentDemo>;


const NavMain = () => {
  return (
      <MainNavTag className="nav-primary" aria-label="Primary Navigation">
        <MainNavUl>
          <MainNavLink><Link to="/">Home</Link></MainNavLink>
          <MainNavLink><Link to="/about">About</Link></MainNavLink>
          <MainNavLink><Link to="/hello">Hello</Link></MainNavLink>
          <MainNavLink><Link to="/hello/goodmorning">Hello good morning</Link></MainNavLink>
          <MainNavLink><Link to="/contact">Contact</Link></MainNavLink>
          <MainNavLink><Link to="/admin">Admin</Link></MainNavLink>
          <MainNavLink><Link to="/demos">Demos</Link></MainNavLink>
        </MainNavUl>
      </MainNavTag>
  );
}



export default NavMain;

// 'css in js' styling 
const MainNavUl = styled.ul`
  list-style-type: none;
  padding: 1em 1.5em;
  margin: 0;
`;
const MainNavLink = styled.li`
  margin: 8px 0;
  a { 
    color: #fff; 
    text-decoration: none;
  }
`;

const MainNavTag = styled.nav`
  position: relative;
  background-color: #195660;
  position: absolute;
  right: 0;
  top: 50px;
`;