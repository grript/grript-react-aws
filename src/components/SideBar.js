import React from 'react';
import styled from "styled-components";
import NavMain from './NavMain';
import { ClassToggleSidebar } from  './Variables';
import { ColorBgSidebarMobile, ColorBgSidebarDesktop  } from './Variables';
import { ClassToggleHamburgerMobile, ClassToggleHamburgerDesktop } from  './Variables';
import { BpTablet, BpDesktop, BpNavLeftDrawer } from  './Variables';
import { HeaderHeightTablet, HeaderHeightDesktop } from  './Variables';
import { WidthMaxSidebar, WidthSidebarPhone, WidthLayoutSidebarTablet, WidthLayoutSidebarDesktop } from  './Variables';
import ButtonCloseSidebar from './ButtonCloseSidebar';


const Sidebar = () => {
  return (
      <SidebarTag  className="sidebar" role="navigation" aria-label="Sidebar navigation" 
        bgColor={ColorBgSidebarMobile} 
        classToggleSidebar={ClassToggleSidebar}
        widthMaxSidebar={WidthMaxSidebar}>
        <SidebarTagInner className="sidebar-inner">
          <NavMain />
        </SidebarTagInner>
        <ButtonCloseSidebar />
      </SidebarTag>
  );
}

export default Sidebar;

// 'css in js' styling 
const SidebarTag = styled.section`
  background-color: ${props => props.bgColor};
  width: 0;
  position: fixed;
  top:0;
  left: 0;
  height: 100%;
  transition: all .3s ease;
  max-width: ${props => props.widthMaxSidebar};
  ul li {
    margin: 12px 0;
  }
  html.${props => props.classToggleSidebar} & {
    width: 180px;
    transition: all .3s ease;
  }
`;

const SidebarTagInner = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;


let handleMouseEnter = () => {
  document.documentElement.classList.add('overflow-hidden');
}  
let handleMouseLeave = () => {
  document.documentElement.classList.remove('overflow-hidden');
}

export const SidebarFixed = (props) => {
  return (
    <StyledSidebarFixed  className="sidebar sidebar-fixed sidebar-as-left-column-on-desktop" role="navigation" aria-label="Sidebar navigation" 
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
        colorBgSidebarMobile={ColorBgSidebarMobile} colorBgSidebarDesktop={ColorBgSidebarDesktop} 
        classToggleHamburgerMobile={ClassToggleHamburgerMobile} classToggleHamburgerDesktop={ClassToggleHamburgerDesktop} 
        bpTablet={BpTablet} bpDesktop={BpDesktop} 
        headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop} 
        widthSidebarPhone={WidthSidebarPhone}
        widthLayoutSidebarTablet={WidthLayoutSidebarTablet} widthLayoutSidebarDesktop={WidthLayoutSidebarDesktop} 
        widthMaxSidebar={WidthMaxSidebar}
        bpNavLeftDrawer={BpNavLeftDrawer}>
      {props.children}
    </StyledSidebarFixed>
  );
} 

const StyledSidebarFixed = styled.aside`
  background-color: ${props => props.colorBgSidebarMobile};
  width: 0;
  position: fixed;
  top: 30px;
  left: 0;
  height: 100%;
  transition: all .75s ease;
  max-width: ${props => props.widthMaxSidebar};
  overflow-y: auto;

  html.${props => props.classToggleHamburgerMobile} & {
    width: ${props => props.widthSidebarPhone}
    transition: all .75s ease;
  }
  @media (min-width:${props => props.bpTablet}) {
    // width: ${props => props.widthLayoutSidebarTablet};
    top: ${props => props.headerHeightTablet}; 
  }

  @media (min-width:${props => props.bpNavLeftDrawer}) {
    width: ${props => props.widthLayoutSidebarDesktop};
    background-color: ${props => props.colorBgSidebarDesktop};
    html.${props => props.classToggleHamburgerMobile} & {
      width: auto;
    }
    html.${props => props.classToggleHamburgerDesktop} & {
      width: 0;
    }  
  }
  @media (min-width:${props => props.bpDesktop}) {
    top: ${props => props.headerHeightDesktop}; 
  }  
`;

export const SidebarInner = (props) => {
  return (
      <StyledSidebarInner  className="sidebar-inner" role="navigation" aria-label="Sidebar navigation" >
        {props.children}
      </StyledSidebarInner>
  );
}

const StyledSidebarInner = styled.div`
  padding-top: 0;
  padding-bottom: 1em;
  overflow-y: auto;
  margin-bottom: 75px;
`;