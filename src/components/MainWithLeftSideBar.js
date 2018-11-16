import React from 'react';
import styled from "styled-components";

import RoutesTopLevel from './RoutesTopLevel';
import { BpDesktop } from './Variables';
import { ClassToggleSideBar } from './Variables';
import { WidthLayoutMainDesktop } from './Variables';

//     classToggleSideBar={ClassToggleSideBar} 
// bpDesktop={BpDesktop} 
// headerHeightDesktop={HeaderHeightDesktop} 
// widthSideBarDesktop={WidthSideBarDesktop}>

const MainWithLeftSideBar = () => {
  return (
    <MainTag className="main-content with-left-sidebar" bpDesktop={BpDesktop} WidthLayoutMainDesktop={WidthLayoutMainDesktop} ClassToggleSideBar={ClassToggleSideBar}>
      <div className="container center container-mobile">
        <RoutesTopLevel />
      </div>  
    </MainTag>
  );
}

export default MainWithLeftSideBar;

// 'css in js' styling 
const MainTag = styled.main`
  @media (min-width: ${props => props.bpDesktop}) {
    width: ${props => props.WidthLayoutMainDesktop};
    float: right;


    html.${props => props.ClassToggleSideBar} & {
      width: auto;
      float: none;
    }
  }
  
`;
