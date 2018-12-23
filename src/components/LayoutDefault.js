import React from 'react';
import Header, { HeaderContainer } from './Header';
import { BrandingWrapped } from './Branding';
import NavSimple from './NavSimple';
import Main, { MainContainer } from './Main';

const LayoutDefault = (props) => {
  return (
    <div className="layout-default">
      <Header>
        <HeaderContainer>
          <BrandingWrapped />
          <NavSimple />
        </HeaderContainer>  
      </Header>

      <Main>
        <MainContainer>
          {props.children}
        </MainContainer>
      </Main>
    </div>  
  );
}
export default LayoutDefault;
