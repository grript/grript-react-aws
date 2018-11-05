import React from 'react';
import styled from "styled-components";

const HamburgerIcon = () => {
  return (
    <HamburgerIconTag onClick>
      <div className="hamburger-icon">
        <div></div>
        <div></div>
        <div></div>
      </div>  
    </HamburgerIconTag>
  );
}
export default HamburgerIcon;

// 'css in js' styling 
const HamburgerIconTag = styled.div`

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
  @media (min-width: 900px) {
    display: none;
  }
`;