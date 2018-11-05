import React from 'react';
import styled from "styled-components"

const NavMainIcon = () => {
  return (
      <MainNavIconWrapper aria-label="Toggle Primary Nav on Mobile">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </MainNavIconWrapper>
  );
}



export default NavMainIcon;

// 'css in js' styling 
const MainNavIconWrapper = styled.button`
  width: 32px;
  padding: 0 2px;
  position: absolute;
  top: 11px;
  right: 10px;
  background-color: transparent;
  border: 0;
  &:hover {
    cursor: pointer;
  }
  span {
    width: 5px;
    height: 5px;
    margin: 1px;
    padding: 0;
    border: 1px solid #fff;
    float: left;
  }
`;