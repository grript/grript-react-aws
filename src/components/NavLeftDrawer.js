import React from 'react';
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import NavMain from './NavMain';
import { BpTablet } from './Variables';
import { BpDesktop } from './Variables';
import { BpDesktopLg } from './Variables';
import { HeaderHeightPhone } from './Variables';
import { HeaderHeightTablet } from './Variables';
import { HeaderHeightDesktop } from './Variables';
import { ColorBgNavLeftDrawer, BpNavLeftDrawer } from './Variables'; 



const NavNavLeftDrawer = () => {
  return (
      <StyledNavNavLeftDrawer className="nav-primary nav-left-drawer" aria-label="Primary Navigation" colorBgNavLeftDrawer={ColorBgNavLeftDrawer} bpNavLeftDrawer={BpNavLeftDrawer} bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
        <NavMain />
      </StyledNavNavLeftDrawer>
  );
}



export default NavNavLeftDrawer;

// 'css in js' styling 
const StyledNavNavLeftDrawer = styled.div`
  position: fixed;
  height: 100%;
  left: 0;
  background-color: ${props => props.colorBgNavLeftDrawer};
  transition: .5s all ease;
  width: 0;
  padding: 1em 0;
  overflow: hidden;
  a {
    padding: 0 1.5em;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  html.nav-hamburger-trigger-is-clicked & {
    width: 160px;
    transition: .5s all ease;
  }
  top: ${props => props.headerHeightPhone};
  @media (min-width: ${props => props.bpTablet}) {
    top: ${props => props.headerHeightPhone};
  }
  @media (min-width: ${props => props.bpDesktop}) {
    top: ${props => props.headerHeightTablet};
  } 
  @media (min-width: ${props => props.bpDesktopLg}) {
    top: ${props => props.headerHeightDesktop};
  }  
  @media (min-width: ${props => props.bpNavLeftDrawer}) {
    background-color: transparent;
    right: 0;
    top: auto;
    width: auto;
    height: auto;
    position: relative;
    padding: 0;
    ul {
      flex-direction: row;
    }
    html.nav-hamburger-trigger-is-clicked & {
      width: auto;
    }  
  }    

`;