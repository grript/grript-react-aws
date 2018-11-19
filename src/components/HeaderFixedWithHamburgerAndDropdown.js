import React from 'react';
import logo from '../logo.svg';
import NavDropdown from './NavDropdown';
import { BrandingWithHamburgerAlways } from './Branding';
import ButtonDownArrow from './ButtonDownArrow';
import ButtonHamburger, {ButtonHamburgerDesktop} from './ButtonHamburger';
import HeaderFixed from './HeaderFixed';
import { HeaderContainerFull } from './Header';
import styled from "styled-components";

const HeaderFixedWithHamburgerAndDropdown = () => {
  return (
    <HeaderFixed>
      <HeaderContainerFull>
        <ButtonHamburger />
        <ButtonHamburgerDesktop />
        <BrandingWithHamburgerAlways /> 
        <NavDropdown />
        <ButtonDownArrow />
      </HeaderContainerFull>  
    </HeaderFixed>
  );
}

export default HeaderFixedWithHamburgerAndDropdown;
