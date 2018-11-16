import React from 'react';
import HeaderSimple from './HeaderSimple';
import RoutesContent from './RoutesContent';

const LayoutWithHeader = () => {
  return (
    <main>
      <HeaderSimple />
      <div className="container">
        <RoutesContent />
      </div>  
    </main>
  );
}
export default LayoutWithHeader;
