import React from 'react';
import styled from "styled-components";
import NavMain from './NavMain';
import { ColorBgSidebarMobile } from './Variables';
import { ClassToggleSidebar } from  './Variables';
import ButtonCloseSidebar from './ButtonCloseSidebar';


const Sidebar = () => {
  return (
      <SidebarTag  className="sidebar" role="navigation" aria-label="Sidebar navigation" bgColor={ColorBgSidebarMobile} classToggleSidebar={ClassToggleSidebar}>
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
  max-width: 300px;
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


