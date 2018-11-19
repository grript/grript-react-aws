import React from 'react';
import styled from "styled-components";

import RoutesTopLevel from './RoutesTopLevel';
import { BpDesktop } from './Variables';
import { ClassToggleSidebar } from './Variables';
import { WidthLayoutMainDesktop } from './Variables';

//     classToggleSidebar={ClassToggleSidebar} 
// bpDesktop={BpDesktop} 
// headerHeightDesktop={HeaderHeightDesktop} 
// widthSidebarDesktop={WidthSidebarDesktop}>

const MainWithLeftSidebar = () => {
  return (
    <MainTag className="main-content with-left-sidebar" bpDesktop={BpDesktop} WidthLayoutMainDesktop={WidthLayoutMainDesktop} ClassToggleSidebar={ClassToggleSidebar}>
      <div className="container center container-mobile">
        <RoutesTopLevel />
      </div>  
    </MainTag>
  );
}

export default MainWithLeftSidebar;

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
