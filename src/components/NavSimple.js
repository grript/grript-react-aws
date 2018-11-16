import React from 'react';
import styled from "styled-components"

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import { ColorBgMobileSidebar } from './Variables'; 

// const RenderedComponentDemo = () => <ComponentDemo>Hello Demos!</ComponentDemo>;


const NavSimple = () => {
  return (
      <MainNavTag className="nav-primary" aria-label="Primary Navigation" bgColor={ColorBgMobileSidebar}>
        <MainNavUl>
          <MainNavLink><Link to="/">Home</Link></MainNavLink>
          <MainNavLink><Link to="/about">About</Link></MainNavLink>
          <MainNavLink><Link to="/blog">Blog</Link></MainNavLink>
          <MainNavLink><Link to="/contact">Contact</Link></MainNavLink>
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