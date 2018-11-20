import React from 'react';
import styled from "styled-components";
import { ColorBgSidebarMobile, ColorBgSidebarDesktop  } from './Variables';
import { ClassToggleHamburgerMobile, ClassToggleHamburgerDesktop } from  './Variables';
import { BpTablet, BpDesktop, BpNavLeftDrawer } from  './Variables';
import { HeaderHeightTablet, HeaderHeightDesktop } from  './Variables';
import { WidthLayoutSidebarTablet, WidthLayoutSidebarDesktop } from  './Variables';
import SidebarWithHover from './SidebarWithHover';

let handleMouseEnter = () => {
  document.documentElement.classList.add('overflow-hidden');
}  
let handleMouseLeave = () => {
  document.documentElement.classList.remove('overflow-hidden');
}

const SidebarFixed = (props) => {
  return (
    <StyledSidebarFixed  className="sidebar sidebar-fixed sidebar-as-left-column-on-desktop" role="navigation" aria-label="Sidebar navigation" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} colorBgSidebarMobile={ColorBgSidebarMobile} colorBgSidebarDesktop={ColorBgSidebarDesktop} classToggleHamburgerMobile={ClassToggleHamburgerMobile} classToggleHamburgerDesktop={ClassToggleHamburgerDesktop} bpTablet={BpTablet} bpDesktop={BpDesktop} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop} widthLayoutSidebarTablet={WidthLayoutSidebarTablet} widthLayoutSidebarDesktop={WidthLayoutSidebarDesktop} bpNavLeftDrawer={BpNavLeftDrawer}>
          <SidebarInner>
            {props.children}
          </SidebarInner>
      </StyledSidebarFixed>
  );
}

export default SidebarFixed;

  

const StyledSidebarFixed = styled.aside`
  background-color: ${props => props.colorBgSidebarMobile};
  width: 0;
  position: fixed;
  top: 30px;
  left: 0;
  height: 100%;
  transition: all .5s ease;
  max-width: 300px;
  overflow-y: auto;

  html.${props => props.classToggleHamburgerMobile} & {
    width: 180px;
    transition: all .5s ease;
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


const SidebarInner = (props) => {
  return (
    <StyledSidebarInner className="sidebar-inner">
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