import React from 'react';
import styled from "styled-components"
import { BpNavLeftDrawer, BpNavLeftDrawerDesktop } from './Variables';
import RoutesContent from './RoutesContent';
import { WidthContainer, BpPhoneLandscape, ClassToggleHamburgerDesktop } from './Variables';


const Main = (props) => {
  return (
    <main className="main">
      {props.children} 
    </main>
  );
}

export default Main;

export const MainContainer = (props) => {
  return (
    <StyledMainContainer className="main-container" widthContainer={WidthContainer} bpPhoneLandscape={BpPhoneLandscape}>
      {props.children}
    </StyledMainContainer>
  );
}

const StyledMainContainer = styled.div`
  max-width: ${props => props.widthContainer};
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  @media (min-width: ${props => props.bpPhoneLandscape}) {
    padding: 0 25px;
  }
`;

export const MainWithLeftSidebarDrawer = (props) => {
  return (
    <StyledMainWithLeftSidebarDrawer className="main" bpNavLeftDrawer={BpNavLeftDrawer} bpNavLeftDrawerDesktop={BpNavLeftDrawerDesktop} classToggleHamburgerDesktop={ClassToggleHamburgerDesktop} >
      <div className="container center container-mobile">
        <RoutesContent />
        {props.children}
      </div>  
    </StyledMainWithLeftSidebarDrawer>
  );
}

const StyledMainWithLeftSidebarDrawer = styled.main`
  @media (min-width:${props => props.bpNavLeftDrawer}) {
    margin-left: 300px;
    transition: .75s all ease;
    html.${props => props.classToggleHamburgerDesktop} & {
      margin-left: 0;
      transition: .75s all ease;
    }
  }
  @media (min-width:${props => props.bpNavLeftDrawerDesktop}) {
    margin-left: 0;
  }
`;