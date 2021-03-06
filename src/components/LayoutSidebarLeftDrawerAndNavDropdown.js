import React from 'react';
import { HeaderFixed, HeaderContainerFull } from './Header';
import ButtonHamburger, { ButtonHamburgerDesktop } from './ButtonHamburger';
import NavDropdown from './NavDropdown';
import { BrandingWithHamburgerAlways } from './Branding';
import ButtonDownArrow from './ButtonDownArrow';
import HeaderHeight from './HeaderHeight';
import { SidebarFixed, SidebarInner } from './Sidebar';
import NavSidebar from './NavSidebar';
import { MainWithLeftSidebarDrawer } from './Main';
import { ButtonCloseSidebarLeft } from './ButtonCloseSidebar';
import { SearchFormBlock } from './Search';
import { SearchDropdownComposite } from './Search';
import { LoginDropdownComposite } from './Login';
import NavDropdownComposite from './NavDropdownComposite';


const LayoutSidebarLeftDrawerAndNavDropdown = () => {
  return (
    <div className="layout-sidebar-left-drawer-and-nav-dropdown">
      <HeaderFixed>
        <HeaderContainerFull>
          <ButtonHamburger />
          <ButtonHamburgerDesktop />
          <BrandingWithHamburgerAlways />
          <SearchDropdownComposite />
          <LoginDropdownComposite />
          <NavDropdownComposite />
        </HeaderContainerFull>
      </HeaderFixed>
      <HeaderHeight />
      <MainWithLeftSidebarDrawer />
      <ButtonCloseSidebarLeft />
      <SidebarFixed>
        <SidebarInner>
          <SearchFormBlock />
          <NavSidebar />
        </SidebarInner>
      </SidebarFixed>
    </div>
  );
}
export default LayoutSidebarLeftDrawerAndNavDropdown;