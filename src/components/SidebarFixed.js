import React from 'react';
import styled from "styled-components";
import { ColorBgSidebarMobile, ColorBgSidebarDesktop  } from './Variables';
import { ClassToggleHamburgerMobile, ClassToggleHamburgerDesktop } from  './Variables';
import { BpTablet, BpDesktop, BpNavLeftDrawer } from  './Variables';
import { HeaderHeightTablet, HeaderHeightDesktop } from  './Variables';
import { WidthLayoutSidebarTablet, WidthLayoutSidebarDesktop } from  './Variables';
import SidebarWithHover from './SidebarWithHover';

const SidebarFixed = (props) => {
  return (
    <StyledSidebarFixed  className="sidebar sidebar-fixed sidebar-as-left-column-on-desktop" role="navigation" aria-label="Sidebar navigation" colorBgSidebarMobile={ColorBgSidebarMobile} colorBgSidebarDesktop={ColorBgSidebarDesktop} classToggleHamburgerMobile={ClassToggleHamburgerMobile} classToggleHamburgerDesktop={ClassToggleHamburgerDesktop} bpTablet={BpTablet} bpDesktop={BpDesktop} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop} widthLayoutSidebarTablet={WidthLayoutSidebarTablet} widthLayoutSidebarDesktop={WidthLayoutSidebarDesktop} bpNavLeftDrawer={BpNavLeftDrawer}>
        <SidebarWithHover>
          <SidebarInner>
            {props.children}
          </SidebarInner>
        </SidebarWithHover>
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
  transition: all .3s ease;
  max-width: 300px;
  overflow-y: auto;

  html.${props => props.classToggleHamburgerMobile} & {
    width: 180px;
    transition: all .3s ease;
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