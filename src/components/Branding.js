import React from 'react';
import logo from '../logo.svg';
import styled from "styled-components";
          
const Branding = () => {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  );
}
export default Branding;

export const BrandingWithHamburger = () => {
  return (
    <StyledBrandingWithHamburger>
      <Branding />
    </StyledBrandingWithHamburger>
  );  
}
// 'css in js' styling 
const StyledBrandingWithHamburger = styled.div`

`;