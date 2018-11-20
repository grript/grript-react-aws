import React from 'react';
import styled from "styled-components";
import NavMain from './NavMain';
import { BpTablet } from './Variables';
import { BpDesktop } from './Variables';
import { BpDesktopLg } from './Variables';
import { HeaderHeightPhone } from './Variables';
import { HeaderHeightTablet } from './Variables';
import { HeaderHeightDesktop } from './Variables';
import { ClassToggleHamburgerMobile } from './Variables';
import { ColorBgLinkHoverNavSideDrawer, ColorBgNavLeftDrawer, BpNavLeftDrawer } from './Variables'; 


class NavLeftDrawer extends React.Component {
  constructor(props){
    super(props);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      boolVar: false
    };
  }

  handleMouseEnter() {
    document.documentElement.classList.add('overflow-hidden');
  }  
  handleMouseLeave() {
    document.documentElement.classList.remove('overflow-hidden');
  }  

  render() {
    return (
      <StyledNavLeftDrawer className="nav-primary nav-left-drawer" aria-label="Primary Navigation" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} colorBgLinkHoverNavSideDrawer={ColorBgLinkHoverNavSideDrawer} classToggleHamburgerMobile={ClassToggleHamburgerMobile} colorBgNavLeftDrawer={ColorBgNavLeftDrawer} bpNavLeftDrawer={BpNavLeftDrawer} bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
        <NavMain />
      </StyledNavLeftDrawer>
    );
  }
}

export default NavLeftDrawer;


// 'css in js' styling 
const StyledNavLeftDrawer = styled.nav`
  position: fixed;
  height: 100%;
  left: 0;
  background-color: ${props => props.colorBgNavLeftDrawer};
  transition: .5s all ease;
  width: 0;
  padding: 1em 0;
  overflow-x: hidden;
  a {
    padding: 5px 1.5em;
    color: #fff;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: ${props => props.colorBgLinkHoverNavSideDrawer};
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0 0 90px 0;
  }
  nav {
    overflow-y: auto;
    margin-bottom: 70px;
  }
  html.${ props => props.classToggleHamburgerMobile} & {
    width: 160px;
    transition: .5s all ease;
  }
  top: ${props => props.headerHeightPhone};
  @media (min-width: ${props => props.bpTablet}) {
    top: ${props => props.headerHeightTablet};
  }
  @media (min-width: ${props => props.bpDesktop}) {
    top: ${props => props.headerHeightTablet};
    ul {
      margin: 0;
    }
  } 
   
  @media (min-width: ${props => props.bpNavLeftDrawer}) {
    background-color: transparent;
    right: 0;
    top: auto;
    width: auto;
    height: auto;
    position: absolute;
    left: auto;
    padding: 0;
    nav {
      margin-bottom: 0;
    }
    ul {
      flex-direction: row;
      margin: 0;
    }
    html.${ props => props.classToggleHamburgerMobile} & {
      width: auto;
    }  
  }  
  @media (min-width: ${props => props.bpDesktopLg}) {
    top: ${props => props.headerHeightDesktop};
  }   

`;