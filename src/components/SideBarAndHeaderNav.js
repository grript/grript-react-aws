import React from 'react';
import styled from "styled-components";
import NavMain from './NavMain';
import { ColorBgMobileSidebar } from './Variables';
import { ClassToggleSideBar } from  './Variables';
import ButtonCloseSideBar from './ButtonCloseSideBar';


const SideBar = () => {
  return (
      <SideBarTag  className="sidebar" role="navigation" aria-label="Sidebar navigation" bgColor={ColorBgMobileSidebar} classToggleSideBar={ClassToggleSideBar}>
        <SideBarTagInner className="sidebar-inner">
          <NavMain />
        </SideBarTagInner>
        <ButtonCloseSideBar />
      </SideBarTag>
  );
}

export default SideBar;

// 'css in js' styling 
const SideBarTag = styled.section`
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
  html.${props => props.classToggleSideBar} & {
    width: 180px;
    transition: all .3s ease;
  }
`;

const SideBarTagInner = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;


