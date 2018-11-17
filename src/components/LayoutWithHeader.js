import React from 'react';
import HeaderSimple from './HeaderSimple';
import RoutesContent from './RoutesContent';

const LayoutWithHeader = () => {
  return (
    <div>
      <HeaderSimple />
      <main>
        <div className="container">
          <RoutesContent />
        </div>  
      </main>
    </div>  
  );
}
export default LayoutWithHeader;
