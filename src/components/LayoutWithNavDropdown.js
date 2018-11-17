import React from 'react';
import HeaderWithNavDropdown from './HeaderWithNavDropdown';
import RoutesContent from './RoutesContent';

const LayoutWithNavDropdown = () => {
  return (
    <div>
      <HeaderWithNavDropdown />
      <main>
        <div className="container">
          <RoutesContent />
        </div>  
      </main>
    </div>  
  );
}
export default LayoutWithNavDropdown;
