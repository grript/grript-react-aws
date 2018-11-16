import React from 'react';
import styled from "styled-components"

import RoutesTopLevel from './RoutesTopLevel';


const MainInner = (props) => {
  return (
    <div className="main-inner">
      <div className="container center container-mobile">
        {props.children}
      </div>  
    </div>
  );
}

export default MainInner;

