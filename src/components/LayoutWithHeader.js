import React from 'react';
import HeaderSimple from './HeaderSimple';
import ContentSimple from './ContentSimple';

const LayoutWithHeader = () => {
  return (
    <main>
      <HeaderSimple />
      <div className="container">
        <ContentSimple />
      </div>  
    </main>
  );
}
export default LayoutWithHeader;
