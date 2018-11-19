import React from 'react';
import styled from "styled-components";
import { NavMainSidebar } from './NavMain';
import { ColorBgSidebarMobile } from './Variables';
import { ClassToggleSidebar } from  './Variables';
import { BpDesktop } from  './Variables';
import { HeaderHeightDesktop } from  './Variables';
import { WidthLayoutSidebarDesktop } from  './Variables';
import SidebarFixed from './SidebarFixed';
import ButtonCloseSidebarInLeftColumn from './ButtonCloseSidebarInLeftColumn';


const Sidebar = () => {
  return (
    <SidebarFixed>
      <NavMainSidebar />
    </SidebarFixed> 
  );
}

export default Sidebar;

// 'css in js' styling 
