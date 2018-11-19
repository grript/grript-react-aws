import React from 'react';
import styled from "styled-components";
import { ClassToggleHamburgerMobile, ClassToggleHamburgerDesktop  } from  './Variables';
import { BpNavLeftDrawer } from  './Variables';

const class_name_mobile = ClassToggleHamburgerMobile;
const class_name_desktop = ClassToggleHamburgerDesktop;

let handleClick = (_event, _self) => {
  console.log("hamburger icon for mobile is clicked!");
  document.documentElement.classList.remove(class_name_desktop);
  // document.documentElement.classList.remove('overflow-hidden-desktop');
  document.documentElement.classList.toggle(class_name_mobile);
  // document.documentElement.classList.toggle('overflow-hidden-mobile');
}

let handleClickDesktop = (_event, _self) => {
  console.log("hamburger icon for dekstop is clicked!");
  document.documentElement.classList.remove(class_name_mobile);
  // document.documentElement.classList.remove('overflow-hidden-mobile');
  document.documentElement.classList.toggle(class_name_desktop);
  // document.documentElement.classList.toggle('overflow-hidden-desktop');
}

const ButtonHamburger = () => {
  return (
    <HamburgerIconWrapperMobile className="hamburger-icon-wrapper-mobile" onClick={handleClick} bpNavLeftDrawer={BpNavLeftDrawer}>
      <StyledHamburger className="hamburger-icon">
        <HamburgerIconOneBar className="OneBar"></HamburgerIconOneBar>
        <HamburgerIconOneBar className="OneBar"></HamburgerIconOneBar>
        <HamburgerIconOneBar className="OneBar"></HamburgerIconOneBar>
      </StyledHamburger>
    </HamburgerIconWrapperMobile>
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
const HamburgerIconWrapperMobile = styled.div`
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
  @media (min-width:${props => props.bpNavLeftDrawer}) {
    display: none;
  }

`;

const StyledHamburger = styled.div`
  border-radius: 50px;
  width: 25px;
  height: auto
  padding: 0;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
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

export const ButtonHamburgerDesktop = () => {
  return (
    <HamburgerWrapperDesktop className="hamburger-icon-wrapper-desktop" onClick={handleClickDesktop} bpNavLeftDrawer={BpNavLeftDrawer}>
      <StyledHamburger className="hamburger-icon">
        <HamburgerIconOneBar className="OneBar"></HamburgerIconOneBar>
        <HamburgerIconOneBar className="OneBar"></HamburgerIconOneBar>
        <HamburgerIconOneBar className="OneBar"></HamburgerIconOneBar>
      </StyledHamburger>
    </HamburgerWrapperDesktop>
  ); 
}

// 'css in js' styling 
const HamburgerWrapperDesktop = styled.div`
  display: none;
  @media (min-width:${props => props.bpNavLeftDrawer}) {
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
  }
`;