import React from 'react';
import logo from '../logo.svg';
import styled from "styled-components";
import { LogoWidthPhone, LogoWidthTablet, LogoWidthDesktop } from './Variables';   
import { BpTablet, BpDesktop } from './Variables';   
import { BpNavLeftDrawer } from './Variables'; 

const Branding = () => {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  );
}
export default Branding;

export const BrandingWrapped = () => {
  return (
    <StyledBranding className="site-logo">
      <Branding />  
    </StyledBranding>
  );
}

// 'css in js' styling 
const StyledBranding = styled.div`
  width: 37px;
  height: 28px;
  img {
    max-width: 100%;
  }
  @media (min-width: ${props => props.bpDesktop}) {
    width: 40px;
    height: 27px;
  }   

  @media (min-width: ${props => props.bpDesktopLg}) {
    width: 50px;
    height: 33px;
  } 

`;

export const BrandingWithHamburgerAlways = () => {
  return (
    <StyledBrandingWithHamburgerAlways className="site-logo-wrapper">
      <BrandingWrapped />  
    </StyledBrandingWithHamburgerAlways>
  );
}

// 'css in js' styling 
const StyledBrandingWithHamburgerAlways = styled.div`
  position: absolute;
  left: 50px;
`;

export const BrandingWithHamburgerOnMobileOnly = () => {
  return (
    <StyledBrandingWithHamburgerOnMobileOnly bpNavLeftDrawer={BpNavLeftDrawer}>
      <BrandingWrapped />  
    </StyledBrandingWithHamburgerOnMobileOnly>
  );
}

// 'css in js' styling 
const StyledBrandingWithHamburgerOnMobileOnly = styled.div`
  margin-left: 30px;
  @media (min-width:${props => props.bpNavLeftDrawer}){
    margin-left: 0;
  }
`;

