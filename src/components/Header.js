import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import NavHeader from './NavHeader';
import NavMainIcon from './NavMainIcon';
import ButtonHamburger from './ButtonHamburger';
import { PresignedPost } from 'aws-sdk/clients/s3';

const Header = () => {
  return (
    <StyledHeader className="header-wrapper">
      <ButtonHamburger />
      <img src={logo} className="App-logo" alt="logo" />
      <NavHeader />
      <NavMainIcon />

    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  
`;

export const HeaderInner = (props) => {
  return (
    <StyledHeaderInner className="header-inner">
      {props.children}
    </StyledHeaderInner>
  );  
}

const StyledHeaderInner = styled.div`
  position: relative;
`;


export const HeaderInnerFullWidth = (props) => {
  return (
    <StyledHeaderInnerFullWidth className="header-container-full">
      {props.children}
    </StyledHeaderInnerFullWidth>
  );
}
const StyledHeaderInnerFullWidth = styled.div`
  position: relative;
`;

export const HeaderContainerFull = (props) => {
  return (
    <StyledHeaderContainerFull className="header-container-full">
      {props.children}
    </StyledHeaderContainerFull>
  );
}

const StyledHeaderContainerFull = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
