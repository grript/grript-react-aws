// should be deprecated as this is in Main.js

import React from 'react';
import styled from "styled-components";

import RoutesContent from './RoutesContent';
import { BpDesktop } from './Variables';
import { ClassToggleSidebar } from './Variables';
import { WidthLayoutMainDesktop } from './Variables';

//     classToggleSidebar={ClassToggleSidebar} 
// bpDesktop={BpDesktop} 
// headerHeightDesktop={HeaderHeightDesktop} 
// widthSidebarDesktop={WidthSidebarDesktop}>

const MainWithLeftSidebarDrawer = () => {
  return (
    <MainTag className="main-content with-left-sidebar" bpDesktop={BpDesktop} WidthLayoutMainDesktop={WidthLayoutMainDesktop} ClassToggleSidebar={ClassToggleSidebar}>
      <div className="container center container-mobile">
        <RoutesContent />
      </div>  
    </MainTag>
  );
}

export default MainWithLeftSidebarDrawer;

// 'css in js' styling 
const MainTag = styled.main`
  @media (min-width: ${props => props.bpDesktop}) {
    width: ${props => props.WidthLayoutMainDesktop};
    float: right;


    html.${props => props.ClassToggleSidebar} & {
      width: auto;
      float: none;
    }
  }
  
`;
