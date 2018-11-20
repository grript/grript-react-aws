import React from 'react';
import { HeaderFixed, HeaderContainerFull } from './Header';
import ButtonHamburger, { ButtonHamburgerDesktop } from './ButtonHamburger';
import NavDropdown from './NavDropdown';
import { BrandingWithHamburgerAlways } from './Branding';
import ButtonDownArrow from './ButtonDownArrow';
import HeaderHeight from './HeaderHeight';
import { SidebarFixed, SidebarInner } from './Sidebar';
import NavSidebar from './NavSidebar';
import { MainWithLeftSidebar } from './Main';

const LayoutSidebarLeftDrawerAndNavDropdown = () => {
  return (
      <div className="layout-sidebar-left-drawer-and-nav-dropdown">
        <HeaderFixed>
          <HeaderContainerFull>
            <ButtonHamburger />
            <ButtonHamburgerDesktop />
            <BrandingWithHamburgerAlways /> 
            <NavDropdown />
            <ButtonDownArrow />
          </HeaderContainerFull>
        </HeaderFixed>
        <HeaderHeight />
        <SidebarFixed>
          <SidebarInner>
            <NavSidebar />
          </SidebarInner>
        </SidebarFixed>
        <MainWithLeftSidebar />
      </div>
  );
}
export default LayoutSidebarLeftDrawerAndNavDropdown;