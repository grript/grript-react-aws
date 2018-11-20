import React from 'react';
import logo from '../logo.svg';
import { BpPhoneLandscape } from './Variables';
import { BpTablet } from './Variables';
import { BpDesktop } from './Variables';
import { BpDesktopLg } from './Variables';
import { HeaderHeightPhone } from './Variables';
import { HeaderHeightTablet } from './Variables';
import { HeaderHeightDesktop } from './Variables';
import NavSimple from './NavSimple';
import styled from "styled-components";

const HeaderSimple = () => {
  return (
    <StyledHeader className="header-wrapper"  bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
      <div className="container">
        <StyledLogo bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
          <img src={logo} className="App-logo" alt="logo" />
        </StyledLogo>   
        <StyledNav>
          <NavSimple />
        </StyledNav>
      </div>  
    </StyledHeader>
  );
}

export default HeaderSimple;


const StyledHeader = styled.header`
  position: relative;
  background-color: #000;
  top:0;
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
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
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

`;




