import React from 'react';
import styled from "styled-components"
import { BpNavDropdown } from './Variables';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import { ColorBgNavDropdown } from './Variables'; 

let handleMouseEnter = (_event, _self) => {
  document.documentElement.classList.add('overflow-hidden');
}  
let handleMouseLeave = (_event, _self) => {
  document.documentElement.classList.remove('overflow-hidden');
}  
const NavDropdown = () => {
  return (
      <MainNavTag className="nav-primary" aria-label="Primary Navigation" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} colorBgNavDropdown={ColorBgNavDropdown} bpNavDropdown={BpNavDropdown} >
        <MainNavUl bpNavDropdown={BpNavDropdown}>
          <MainNavLink><Link to="/">Home</Link></MainNavLink>
          <MainNavLink><Link to="/about">About</Link></MainNavLink>
          <MainNavLink><Link to="/blog">Blog</Link></MainNavLink>
          <MainNavLink><Link to="/contact">Contact</Link></MainNavLink>
        </MainNavUl>
      </MainNavTag>
  );
}



export default NavDropdown;

// 'css in js' styling 
const MainNavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.bpNavDropdown}) {
    flex-direction: row;
  }  
`;
const MainNavLink = styled.li`
  margin: 0;
  a { 
    color: #fff; 
    text-decoration: none;
    padding: 0 1em;
    display: block;
  }
`;

const MainNavTag = styled.nav`
  position: absolute;
  top: 100%;
  right: 0;
  max-height: 0;
  padding: 0;
  overflow: hidden;
  transition: .5s all ease;
  background-color: ${props => props.colorBgNavDropdown};

  html.nav-dropdown-trigger-is-clicked & {
    max-height: 500px;
    transition: .5s all ease;
  }
  @media (min-width: ${props => props.bpNavDropdown}) {
    position: relative;
    max-height: none;
    top: auto;
  }

  @media (min-width: ${props => props.bpNavDropdown}) {
    background-color: transparent;
  }  
`;