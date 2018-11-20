import React from 'react';
import styled from "styled-components";
import { BpTablet } from './Variables';
import { BpDesktop } from './Variables';
import { BpDesktopLg } from './Variables';
import { HeaderHeightPhone } from './Variables';
import { HeaderHeightTablet } from './Variables';
import { HeaderHeightDesktop } from './Variables';
import ButtonHamburger from './ButtonHamburger';
import { BrandingWrapped }  from './Branding';
import NavLeftDrawer from './NavLeftDrawer';

const HeaderWithHamburgerIcon = () => {
  return (
    <StyledHeader className="header-wrapper"  bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
      <StyledHeaderContainer className="container-header">
        <ButtonHamburger />
        <StyledBranding className="branding-wrapper">
          <BrandingWrapped />
        </StyledBranding>  
        <NavLeftDrawer />
      </StyledHeaderContainer>  
    </StyledHeader>
  );
}

export default HeaderWithHamburgerIcon;


const StyledHeader = styled.header`
  position: fixed;
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

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

const StyledBranding = styled.div`
  position: absolute;
  left: 50px;
  @media (min-width: ${props => props.bpDesktop}) {
    
  }
`;