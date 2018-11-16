import React from 'react';
import styled from "styled-components"

import RoutesTopLevel from './RoutesTopLevel';


const MainInner = () => {
  return (
    <div className="main-inner">
      <div className="container center container-mobile">
        <RoutesTopLevel />
      </div>  
    </div>
  );
}

export default MainInner;

