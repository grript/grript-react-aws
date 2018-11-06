import React from 'react';
import styled from "styled-components";
import NavMain from './NavMain';
import { ColorBgMobileSidebar } from './Variables'; 

const NavHeader = () => {
  return (
      <NavHeaderTag bgColor={ColorBgMobileSidebar}>
        <NavMain />
      </NavHeaderTag>  
  );
}



export default NavHeader;


// 'css in js' styling 
const NavHeaderTag = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  min-width: 180px;
  background-color: ${props => props.bgColor};
  @media (min-width: 900px) {
    ul {
      display: flex;
    }
  }
`;

