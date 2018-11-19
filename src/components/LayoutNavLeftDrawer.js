import React from 'react';
import HeaderWithHamburgerIcon from './HeaderWithHamburgerIcon';
import HeaderHeight from './HeaderHeight';
import RoutesContent from './RoutesContent';

const LayoutNavLeftDrawer = () => {
  return (
    <div className="layout-nav-left-drawer">
      <HeaderWithHamburgerIcon />
      <HeaderHeight />
      <main>
        <div className="container">
          <RoutesContent />
        </div>  
      </main>
    </div>  
  );
}
export default LayoutNavLeftDrawer;
