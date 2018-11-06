import React from 'react';
import styled from "styled-components";


let handleClick = (_event, _self) => {
  console.log("hambureger icon is clicked!");
  document.documentElement.classList.toggle('mobile-sidebar-is-open');
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

  .hamburger-icon {
    margin-top: 4px;
    & > div {
      height: 3px;
      margin-bottom: 3px;
      background-color: #fff;
    }
    & > div:last-child {
      margin-bottom: 0;
    }
  }
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