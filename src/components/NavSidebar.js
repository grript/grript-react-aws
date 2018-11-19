import React from 'react';
import styled from "styled-components"
import { NavMainStyled } from './NavMain';

import { ColorBgSidebarMobile } from './Variables'; 



const NavSidebar = () => {
  return (
      <MainNavTag className="nav-primary" aria-label="Primary Navigation" bgColor={ColorBgSidebarMobile}>
        <NavMainStyled />
      </MainNavTag>
  );
}



export default NavSidebar;


export const NavSidebarStyled = () => {

}


// 'css in js' styling 
const MainNavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;
const MainNavLink = styled.li`
  margin: 0 1em;
  a { 
    color: #fff; 
    text-decoration: none;
  }
`;

const MainNavTag = styled.nav`
  position: relative;
`;