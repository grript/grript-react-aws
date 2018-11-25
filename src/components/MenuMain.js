import React from 'react';
import styled from 'styled-components';
import { ColorBgLinkIsActive, ColorBgLinkHoverNavDropdown } from './Variables';


import {
  NavLink,
} from 'react-router-dom';
import { BpNavDropdown } from './Variables';

const MenuMain = () => {
  return (
    <ul>
      <li><NavLink exact={true} activeClassName='is-active' exact={true} activeClassName='is-active' to="/">Home</NavLink></li>
      <li><NavLink exact={true} activeClassName='is-active' to="/about">About</NavLink></li>
      <li><NavLink exact={true} activeClassName='is-active' to="/blog">Blog</NavLink></li>
      <li><NavLink exact={true} activeClassName='is-active' to="/contact">Contact</NavLink></li>
      <li><NavLink exact={true} activeClassName='is-active' to="/contact">Contact</NavLink></li>
      <li><NavLink exact={true} activeClassName='is-active' to="/contact">Contact</NavLink></li>
    </ul>

  );
}

export default MenuMain;


export const MenuMainNavWrapped = () => {
  return (
    <nav className="nav-primary" aria-label="Primary Navigation">
      <MenuMain />
    </nav>
  );  
}

// as used in Nav Dropdown
export const MenuMainStyledAsDropdown = () => {
  return (
    <StyledMenuMain 
      className="nav-primary" aria-label="Primary Navigation" 
      bpNavDropdown={BpNavDropdown}
      colorBgLinkIsActive={ColorBgLinkIsActive}
      colorBgLinkHoverNavDropdown={ColorBgLinkHoverNavDropdown}>
      <MenuMain />
    </StyledMenuMain>
  );  
}

// 'css in js' styling 
const StyledMenuMain = styled.nav`
  margin-bottom: 2em;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    a {
      color: #fff;
      text-decoration: none;
      padding: 5px 2em;
      display: block;
    }
    a:hover {
      background-color: ${props => props.colorBgLinkHoverNavDropdown};
    }
    a.is-active {
      background-color: ${props => props.colorBgLinkIsActive};
    }
  }  
  @media (min-width: ${props => props.bpNavDropdown}) {
    margin-bottom: 0;
    ul {
      flex-direction: row;
    }  
  }  
`;

