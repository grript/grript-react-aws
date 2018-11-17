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


const NavMain = () => {
  return (
      <MainNavTag className="nav-primary" aria-label="Primary Navigation" bgColor={ColorBgMobileSidebar}>
        <MainNavUl>
          <MainNavLink><Link to="/">Home</Link></MainNavLink>
          <MainNavLink><Link to="/about">About</Link></MainNavLink>
          <MainNavLink><Link to="/blog">Blog</Link></MainNavLink>
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
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    // display: flex;
  }
`;
const MainNavLink = styled.li`
  margin: 8px 0;
  a { 
    color: #fff; 
    text-decoration: none;
  }

  @media (min-width: 900px) {
    // margin: 0 1em;
  }
`;

const MainNavTag = styled.nav`
  position: relative;
  // position: absolute;
  // right: 0;
  // top: 50px;
  // min-width: 180px;
  // background-color: ${props => props.bgColor};
`;