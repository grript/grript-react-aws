import React from 'react';
import styled from "styled-components"

import RoutesTopLevel from './RoutesTopLevel';


const Main = () => {
  return (
    <main className="main-inner">
      <div className="container center container-mobile">
        <RoutesTopLevel />
      </div>  
    </main>
  );
}

export default Main;

