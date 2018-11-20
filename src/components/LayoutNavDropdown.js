import React from 'react';
import Header, { HeaderContainer } from './Header';
import { BrandingWrapped } from './Branding';
import NavDropdown from './NavDropdown';
import ButtonDownArrow from './ButtonDownArrow';
import Main, { MainContainer } from './Main';
import RoutesContent from './RoutesContent';

const LayoutNavDropdown = () => {
  return (
    <div className="layout-nav-dropdown">
      <Header>
        <HeaderContainer>
          <BrandingWrapped />
          <NavDropdown />
          <ButtonDownArrow />
        </HeaderContainer>  
      </Header>
      <Main>
        <MainContainer>
          <RoutesContent />
        </MainContainer>
      </Main>
    </div>  
  );
}
export default LayoutNavDropdown;
