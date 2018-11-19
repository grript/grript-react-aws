import React from 'react';
import styled from "styled-components"
import { BpNavLeftDrawer, BpNavLeftDrawerDesktop } from './Variables';
import RoutesContent from './RoutesContent';
import RoutesTopLevel from './RoutesTopLevel';
import ContentSimple from './ContentSimple';
import { ClassToggleHamburgerDesktop } from './Variables';


const Main = () => {
  return (
    <main className="main">
      <div className="container center container-mobile">
        <RoutesTopLevel />
      </div>  
    </main>
  );
}

export default Main;

export const MainWithLeftSidebar = () => {
  return (
    <StyledMainWithLeftSidebar className="main" bpNavLeftDrawer={BpNavLeftDrawer} bpNavLeftDrawerDesktop={BpNavLeftDrawerDesktop} classToggleHamburgerDesktop={ClassToggleHamburgerDesktop} bpNavLeftDrawerDesktop={BpNavLeftDrawerDesktop}>
      <div className="container center container-mobile">
        <ContentSimple />
      </div>  
    </StyledMainWithLeftSidebar>
  );
}

const StyledMainWithLeftSidebar = styled.main`
  @media (min-width:${props => props.bpNavLeftDrawer}) {
    margin-left: 300px;
    transition: .5s all ease;
    html.${props => props.classToggleHamburgerDesktop} & {
      margin-left: 0;
      transition: .5s all ease;
    }
  }
  @media (min-width:${props => props.bpNavLeftDrawerDesktop}) {
    margin-left: 0;
  }
`;