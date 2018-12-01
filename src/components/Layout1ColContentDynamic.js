import React from 'react';
import Main, { MainContainer } from './Main';
import RoutesContent from './RoutesContent';

const Layout1ColContentDynamic = () => {
  
  return (
    <Main>
      <MainContainer>
        <RoutesContent />
      </MainContainer>
    </Main>
  );
}
export default Layout1ColContentDynamic;
