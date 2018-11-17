import React from 'react';
import styled from "styled-components";
import { ClassToggleHamburger } from  './Variables';
import { BpNavLeftDrawer } from  './Variables';

const class_name = ClassToggleHamburger;

let handleClick = (_event, _self) => {
  console.log("hamburger icon is clicked!");
  document.documentElement.classList.toggle(class_name);
  document.documentElement.classList.toggle('overflow-hidden');
}

const ButtonHamburger = () => {
  return (
    <HamburgerIconWrapper className="hamburger-icon-wrapper" onClick={handleClick}>
      <HamburgerIconTag className="hamburger-icon">
        <HamburgerIconOneBar className="OneBar"></HamburgerIconOneBar>
        <HamburgerIconOneBar className="OneBar"></HamburgerIconOneBar>
        <HamburgerIconOneBar className="OneBar"></HamburgerIconOneBar>
      </HamburgerIconTag>
    </HamburgerIconWrapper>
  );
}
export default ButtonHamburger;


export const ButtonHamburgerHideOnDesktop = () => {
  return (
    <StyledButtonHamburgerHideOnDesktop bpNavLeftDrawer={BpNavLeftDrawer}>
      <ButtonHamburger />
    </StyledButtonHamburgerHideOnDesktop>
  );
}


// 'css in js' styling 
const HamburgerIconWrapper = styled.div`
  cursor: pointer;
  border-radius: 50px;
  width: 25px;
  height: 25px;
  padding: 10px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const HamburgerIconTag = styled.div`
  margin-top: 4px;
  & > div {
    height: 3px;
    margin-bottom: 3px;
    background-color: #fff;
  }
  & > div:last-child {
    margin-bottom: 0;
  }
`;

const HamburgerIconOneBar = styled.div`
  height: 3px;
  margin-bottom: 3px;
  background-color: #fff;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledButtonHamburgerHideOnDesktop = styled.div`
  @media (min-width:${props => props.bpNavLeftDrawer}) {
    display: none;
  }
`;