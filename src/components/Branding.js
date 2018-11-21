import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';
import { LogoWidthPhone, LogoWidthTablet, LogoWidthDesktop, LogoHeightPhone, LogoHeightTablet, LogoHeightDesktop } from './Variables';   
import { BpTablet, BpDesktop, BpDesktopLg } from './Variables';   
import { BpNavLeftDrawer } from './Variables'; 

const Branding = () => {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  );
}
export default Branding;

export const BrandingWrapped = () => {
  return (
    <StyledBranding className="site-logo" bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} logoWidthPhone={LogoWidthPhone} logoWidthTablet={LogoWidthTablet} logoWidthDesktop={LogoWidthDesktop} logoHeightPhone={LogoHeightPhone} logoHeightTablet={LogoHeightTablet} logoHeightDesktop={LogoHeightDesktop}>
      <Branding />  
    </StyledBranding>
  );
}

// 'css in js' styling 
const StyledBranding = styled.div`
  width: ${props => props.logoWidthPhone};
  height: ${props => props.logoHeightPhone};
  img {
    max-width: 100%;
  }
  @media (min-width: ${props => props.bpDesktop}) {
    width: ${props => props.logoWidthTablet};
    height: ${props => props.logoHeightTablet};
  }   

  @media (min-width: ${props => props.bpDesktopLg}) {
    width: ${props => props.logoWidthDesktop};
    height: ${props => props.logoHeightDesktop};
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

