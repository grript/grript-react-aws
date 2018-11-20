import React from 'react';
import { HeaderDefault, HeaderContainer } from './Header';
import { BrandingWrapped } from './Branding';
import NavDropdown from './NavDropdown';
import ButtonDownArrow from './ButtonDownArrow';
import Main, { MainContainer } from './Main';
import RoutesContent from './RoutesContent';

const LayoutNavDropdown = () => {
  return (
    <div className="layout-nav-dropdown">
      <HeaderDefault>
        <HeaderContainer>
          <BrandingWrapped />
          <NavDropdown />
          <ButtonDownArrow />
        </HeaderContainer>  
      </HeaderDefault>
      <Main>
        <MainContainer>
          <RoutesContent />
        </MainContainer>
      </Main>
    </div>  
  );
}
export default LayoutNavDropdown;
