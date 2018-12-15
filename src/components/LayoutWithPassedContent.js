import React from 'react';
import Main, { MainContainer } from './Main';
import RoutesContent from './RoutesContent';

const LayoutWithPassedContent = (props) => {
  
  return (
    <Main>
      <MainContainer>
        {props.children}
      </MainContainer>
    </Main>
  );
}
export default LayoutWithPassedContent;
