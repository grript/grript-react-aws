import React from 'react';
import styled from "styled-components";
import NavMain from './NavMain';
import { ColorBgMobileSidebar } from './Variables';
import { ClassToggleSideBar } from  './Variables';
import { BpDesktop } from  './Variables';
import { HeaderHeightDesktop } from  './Variables';
import { WidthLayoutSideBarDesktop } from  './Variables';
import ButtonCloseSideBarInLeftColumn from './ButtonCloseSideBarInLeftColumn';


const SideBar = () => {
  return (
      <SideBarTag  className="sidebar sidebar-as-left-column-on-desktop" role="navigation" aria-label="Sidebar navigation" bgColor={ColorBgMobileSidebar} classToggleSideBar={ClassToggleSideBar} bpDesktop={BpDesktop} headerHeightDesktop={HeaderHeightDesktop} WidthLayoutSideBarDesktop={WidthLayoutSideBarDesktop}>
        <SideBarTagInner className="sidebar-inner">
          <NavMain />
        </SideBarTagInner>
        <ButtonCloseSideBarInLeftColumn />
      </SideBarTag>
  );
}

export default SideBar;
// headerHeightDesktop
// 'css in js' styling 
const SideBarTag = styled.section`
  background-color: ${props => props.bgColor};
  width: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  transition: all .3s ease;
  max-width: 300px;
  ul li {
    margin: 12px 0;
  }
  html.${props => props.classToggleSideBar} & {
    width: 180px;
    transition: all .3s ease;
  }
  @media (min-width:${props => props.bpDesktop}) {
    width: ${props => props.WidthLayoutSideBarDesktop};
    top: ${props => props.headerHeightDesktop};
    html.${props => props.classToggleSideBar} & {
      width: 0;
    }  
  }
`;

const SideBarTagInner = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;


