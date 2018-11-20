import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import NavHeader from './NavHeader';
import NavMainIcon from './NavMainIcon';
import ButtonHamburger from './ButtonHamburger';
import { BpTablet } from './Variables';
import { BpDesktop } from './Variables';
import { BpDesktopLg } from './Variables';
import { HeaderHeightPhone } from './Variables';
import { HeaderHeightTablet } from './Variables';
import { HeaderHeightDesktop } from './Variables';


const Header = () => {
  return (
    <StyledHeader className="header-wrapper">
      <ButtonHamburger />
      <img src={logo} className="App-logo" alt="logo" />
      <NavHeader />
      <NavMainIcon />

    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  
`;

export const HeaderInner = (props) => {
  return (
    <StyledHeaderInner className="header-inner">
      {props.children}
    </StyledHeaderInner>
  );  
}

const StyledHeaderInner = styled.div`
  position: relative;
`;


export const HeaderInnerFullWidth = (props) => {
  return (
    <StyledHeaderInnerFullWidth className="header-container-full">
      {props.children}
    </StyledHeaderInnerFullWidth>
  );
}
const StyledHeaderInnerFullWidth = styled.div`
  position: relative;
`;

export const HeaderContainerFull = (props) => {
  return (
    <StyledHeaderContainerFull className="header-container-full">
      {props.children}
    </StyledHeaderContainerFull>
  );
}

const StyledHeaderContainerFull = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;


export const HeaderFixed = (props) => {
  return (
    <StyledHeaderFixed className="header-wrapper-fixed" bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
      {props.children}
    </StyledHeaderFixed>
  );  
}

const StyledHeaderFixed = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #000;
  height: ${props => props.headerHeightPhone};
  @media (min-width: ${props => props.bpTablet}) {
    height: ${props => props.headerHeightTablet};
  }
  @media (min-width: ${props => props.bpDesktop}) {
    height: ${props => props.headerHeightDesktop};
  } 
  @media (min-width: ${props => props.bpDesktopLg}) {
    height: ${props => props.headerHeightDesktop};
  }   
`;