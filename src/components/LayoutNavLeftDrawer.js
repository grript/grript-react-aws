import React from 'react';
import { HeaderFixed, HeaderContainer } from './Header';
import ButtonHamburger from './ButtonHamburger';
import HeaderHeight from './HeaderHeight';
import Main, { MainContainer } from './Main';
import RoutesContent from './RoutesContent';
import { BrandingWithHamburgerAlways }  from './Branding';
import NavLeftDrawer from './NavLeftDrawer';

const LayoutNavLeftDrawer = () => {
  return (
    <div className="layout-nav-left-drawer">
      <HeaderFixed>
        <HeaderContainer>
          <ButtonHamburger />
          <BrandingWithHamburgerAlways />
          <NavLeftDrawer />
        </HeaderContainer>  
      </HeaderFixed>

      <HeaderHeight />
      <Main>
        <MainContainer>
          <RoutesContent />
        </MainContainer>
      </Main>
    </div>  
  );
}
export default LayoutNavLeftDrawer;
