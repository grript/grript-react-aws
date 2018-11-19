import React from 'react';
import styled from "styled-components";
import { BpTablet } from './Variables';
import { BpDesktop } from './Variables';
import { BpDesktopLg } from './Variables';
import { HeaderHeightPhone } from './Variables';
import { HeaderHeightTablet } from './Variables';
import { HeaderHeightDesktop } from './Variables';


const HeaderFixed = (props) => {
  return (
    <StyledHeaderFixed className="header-wrapper" bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
      {props.children}
    </StyledHeaderFixed>
  );
}
//  bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>


export default HeaderFixed;

const StyledHeaderFixed = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #000;
  height: ${props => props.headerHeightPhone};
  @media (min-width: ${props => props.bpTablet}) {
    height: ${props => props.headerHeightTablet};
  }
  @media (min-width: ${props => props.bpDesktop}) {
    height: ${props => props.headerHeightDesktop};
  } 
  @media (min-width: ${props => props.bpDesktopLg}) {
    height: ${props => props.headerHeightDesktop};
  }   
`;