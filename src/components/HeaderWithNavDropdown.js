import React from 'react';
import logo from '../logo.svg';
import { BpPhoneLandscape } from './Variables';
import { BpTablet } from './Variables';
import { BpDesktop } from './Variables';
import { BpDesktopLg } from './Variables';
import { HeaderHeightPhone } from './Variables';
import { HeaderHeightTablet } from './Variables';
import { HeaderHeightDesktop } from './Variables';
import { BpNavDropdown } from './Variables';
import NavDropdown from './NavDropdown';
import ButtonDownArrow from './ButtonDownArrow';
import styled from "styled-components";

const HeaderWithNavDropdown = () => {
  return (
    <StyledHeader className="header-wrapper"  bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
      <div className="container-header">
        <StyledLogo bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
          <img src={logo} className="App-logo" alt="logo" />
        </StyledLogo>   
        <StyledNav bpNavDropdown={BpNavDropdown}>
          <NavDropdown />
        </StyledNav>
        <ButtonDownArrow />
      </div>  
    </StyledHeader>
  );
}

export default HeaderWithNavDropdown;


const StyledHeader = styled.header`
  position: relative;
  background-color: #000;
  top: 0;
  width: 100%;
  height: ${props => props.headerHeightPhone};
  @media (min-width: ${props => props.bpTablet}) {
    height: ${props => props.headerHeightPhone};
  }
  @media (min-width: ${props => props.bpDesktop}) {
    height: ${props => props.headerHeightTablet};
  } 
  @media (min-width: ${props => props.bpDesktopLg}) {
    height: ${props => props.headerHeightDesktop};
  }   
  .container-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    position: relative;
  }
`;

const StyledLogo = styled.div`
  width: 30px;
  height: 21px;
  @media (min-width: ${props => props.bpDesktop}) {
    width: 50px;
    height: 33px;
  }   
`;

const StyledNav = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  max-height: 0;
  padding: 0;
  overflow: hidden;
  transition: .5s all ease;

  html.nav-dropdown-trigger-is-clicked & {
    max-height: 1000px;
    transition: .5s all ease;
  }
  @media (min-width: ${props => props.bpNavDropdown}) {
    position: relative;
    max-height: none;
    top: auto;
  }
`;




