import React from 'react';
import { HeaderDefault, HeaderContainer } from './Header';
import { BrandingWrapped } from './Branding';
import NavSimple from './NavSimple';
import Main, { MainContainer } from './Main';
import RoutesContent from './RoutesContent';

const LayoutNavSimple = () => {
  return (
    <div className="layout-nav-simple">
      <HeaderDefault>
        <HeaderContainer>
          <BrandingWrapped />
          <NavSimple />
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
export default LayoutNavSimple;
