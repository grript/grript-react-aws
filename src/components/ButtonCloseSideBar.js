import React from 'react';
import styled from 'styled-components';
import { ClassToggleHamburgerMobile, ClassToggleHamburgerDesktop } from  './Variables';
import { ColorBgSidebarMobile, ColorBgSidebarDesktop  } from './Variables';
import { BpTablet, BpDesktop, BpNavLeftDrawer } from  './Variables';
import { HeaderHeightPhone, HeaderHeightTablet, HeaderHeightDesktop } from  './Variables';
import { WidthMaxButtonCloseSidebarWrapper, WidthButtonCloseSidebar, HeightButtonCloseSidebar, WidthLayoutSidebarTablet, WidthLayoutSidebarDesktop } from  './Variables';
import { WidthButtonCloseSidebarWrapperPhone, WidthButtonCloseSidebarWrapperTablet, WidthButtonCloseSidebarWrapperDesktop } from  './Variables';
import { WidthSidebarPhone } from  './Variables';


let handleClick = (_event, _self) => {
  console.log("BUttonSidebar icon is clicked!");
  document.documentElement.classList.remove(ClassToggleHamburgerMobile);
  document.documentElement.classList.toggle(ClassToggleHamburgerDesktop);
}

const ButtonCloseSidebar = () => {
  return (
    <CloseSidebarIcon className="close-menu-icon" 
      onClick={handleClick} 
      bgColor={ColorBgSidebarMobile} 
      classToggleHamburgerMobile={ClassToggleHamburgerMobile}
      classToggleHamburgerDesktop={ClassToggleHamburgerDesktop} />
  );
}
export default ButtonCloseSidebar;


const CloseSidebarIcon = styled.div`
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTEycHgiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDY0IDY0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCI+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjguOTQxLDMxLjc4NkwwLjYxMyw2MC4xMTRjLTAuNzg3LDAuNzg3LTAuNzg3LDIuMDYyLDAsMi44NDljMC4zOTMsMC4zOTQsMC45MDksMC41OSwxLjQyNCwwLjU5ICAgYzAuNTE2LDAsMS4wMzEtMC4xOTYsMS40MjQtMC41OWwyOC41NDEtMjguNTQxbDI4LjU0MSwyOC41NDFjMC4zOTQsMC4zOTQsMC45MDksMC41OSwxLjQyNCwwLjU5YzAuNTE1LDAsMS4wMzEtMC4xOTYsMS40MjQtMC41OSAgIGMwLjc4Ny0wLjc4NywwLjc4Ny0yLjA2MiwwLTIuODQ5TDM1LjA2NCwzMS43ODZMNjMuNDEsMy40MzhjMC43ODctMC43ODcsMC43ODctMi4wNjIsMC0yLjg0OWMtMC43ODctMC43ODYtMi4wNjItMC43ODYtMi44NDgsMCAgIEwzMi4wMDMsMjkuMTVMMy40NDEsMC41OWMtMC43ODctMC43ODYtMi4wNjEtMC43ODYtMi44NDgsMGMtMC43ODcsMC43ODctMC43ODcsMi4wNjIsMCwyLjg0OUwyOC45NDEsMzEuNzg2eiIvPgogIDwvZz4KPC9zdmc+Cg==');
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: center center;
  background-color: ${props => props.bgColor};
  transition: transform .25s ease;
  height: 40px;
  width: 40px;
  // width: 0;
  position: absolute;
  // right: -18px;
  top: 0;
  transform: rotate(-90deg);
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }

  html.${props => props.classToggleHamburgerDesktop} & {
    transform: rotate(0deg);
    transition: transform .75s ease;
  }
`;

export const ButtonCloseSidebarLeft = () => {
  return (
    <StyledButtonCloseSidebarLeft className="close-sidebar-wrapper"
      colorBgSidebarMobile={ColorBgSidebarMobile} colorBgSidebarDesktop={ColorBgSidebarDesktop} 
      bgColor={ColorBgSidebarMobile}
      classToggleHamburgerMobile={ClassToggleHamburgerMobile} classToggleHamburgerDesktop={ClassToggleHamburgerDesktop} 
      bpTablet={BpTablet} bpDesktop={BpDesktop} 
      headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop} 
      widthLayoutSidebarTablet={WidthLayoutSidebarTablet} widthLayoutSidebarDesktop={WidthLayoutSidebarDesktop} 
      widthButtonCloseSidebar={WidthButtonCloseSidebar} heightButtonCloseSidebar={HeightButtonCloseSidebar}
      widthSidebarPhone={WidthSidebarPhone}
      widthMaxButtonCloseSidebarWrapper={WidthMaxButtonCloseSidebarWrapper}
      widthButtonCloseSidebarWrapperPhone={WidthButtonCloseSidebarWrapperPhone}
      widthButtonCloseSidebarWrapperTablet={WidthButtonCloseSidebarWrapperTablet}
      widthButtonCloseSidebarWrapperDesktop={WidthButtonCloseSidebarWrapperDesktop}      
      bpNavLeftDrawer={BpNavLeftDrawer}>
      <ButtonCloseSidebar   />
    </StyledButtonCloseSidebarLeft>  
  );
}


const StyledButtonCloseSidebarLeft = styled.div`
  background-color: ${props => props.bgColor};
  position: fixed;
  height: ${props => props.heightButtonCloseSidebar};
  top: ${props => props.headerHeightPhone}; 
  width: 0;
  transition: all .75s ease;
  max-width: ${props => props.widthMaxButtonCloseSidebarWrapper};
  border-radius: 30px;
  .close-menu-icon {
    right: 0;
  }
  html.${props => props.classToggleHamburgerMobile} & {
    width: ${props => props.widthButtonCloseSidebarWrapperPhone}
    transition: all .75s ease;  
  }
  @media (min-width:${props => props.bpTablet}) {
    // width: ${props => props.widthLayoutSidebarTablet};
    //width: 0;
    // width: ${props => props.widthButtonCloseSidebarWrapperTablet};
    top: ${props => props.headerHeightTablet}; 
  }

  @media (min-width:${props => props.bpNavLeftDrawer}) {
    width: ${props => props.widthButtonCloseSidebarWrapperDesktop};
    // width: 0;
    background-color: ${props => props.colorBgSidebarDesktop};
    html.${props => props.classToggleHamburgerMobile} & {
      width: ${props => props.widthButtonCloseSidebarWrapperDesktop};
    }
    html.${props => props.classToggleHamburgerDesktop} & {
      width: 0;
    }  
  }
  @media (min-width:${props => props.bpDesktop}) {
    top: ${props => props.headerHeightDesktop}; 
  }  
`;
