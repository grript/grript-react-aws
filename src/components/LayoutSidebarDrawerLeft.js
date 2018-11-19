import React from 'react';
import ContentSimple from './ContentSimple';
import HeaderHeight from './HeaderHeight';
import SidebarAsLeftColumnOnDesktop from './SidebarAsLeftColumnOnDesktop';
import HeaderFixedWithHamburgerAndDropdown from './HeaderFixedWithHamburgerAndDropdown';
import { MainWithLeftSidebar } from './Main';

const LayoutSidebarDrawerLeft = () => {
  
  return (
    <div className="layout-sidebar-drawer-left">
      <HeaderFixedWithHamburgerAndDropdown />
      <HeaderHeight />
      <SidebarAsLeftColumnOnDesktop />
      <MainWithLeftSidebar /> 
    </div>
  );
}
export default LayoutSidebarDrawerLeft;
