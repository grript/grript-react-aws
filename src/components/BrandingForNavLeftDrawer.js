import React from 'react';
import styled from "styled-components";
import { BpNavLeftDrawer } from './Variables'; 
import Branding from './Branding'; 
import { LogoWidthPhone, LogoWidthTablet, LogoWidthDesktop } from './Variables';   
import { BpTablet, BpDesktop } from './Variables';   
      

const BrandingForNavLeftDrawer = () => {
  return (
    <StyledBrandingForNavLeftDrawer  className="branding branding-rocks33" bpNavLeftDrawer={BpNavLeftDrawer} bpTablet={BpTablet} bpDesktop={BpDesktop}>
      <Branding />
    </StyledBrandingForNavLeftDrawer>
  );  
}

export default BrandingForNavLeftDrawer;

// 'css in js' styling 
const StyledBrandingForNavLeftDrawer = styled.div`
  width: 30px;
  height: 21px;
  margin-left: 30px;
  display: inline-block;
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
  @media (min-width:${props => props.bpNavLeftDrawer}){
    margin-left: 0;
  }
`;