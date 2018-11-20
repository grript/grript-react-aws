import React from 'react';
import Header, { HeaderContainer } from './Header';
import { BrandingWrapped } from './Branding';
import NavSimple from './NavSimple';
import Main, { MainContainer } from './Main';
import RoutesContent from './RoutesContent';

const LayoutNavSimple = () => {
  return (
    <div className="layout-nav-simple">
      <Header>
        <HeaderContainer>
          <BrandingWrapped />
          <NavSimple />
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
export default LayoutNavSimple;
