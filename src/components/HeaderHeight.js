import React from 'react';
import styled from "styled-components";
import { BpTablet } from './Variables';
import { BpDesktop } from './Variables';
import { BpDesktopLg } from './Variables';
import { HeaderHeightPhone } from './Variables';
import { HeaderHeightTablet } from './Variables';
import { HeaderHeightDesktop } from './Variables';

const HeaderHeight = () => {
  return (
    <StyledHeaderHeight  className="header-height" bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
    </StyledHeaderHeight>
  );
}

export default HeaderHeight;

const StyledHeaderHeight = styled.div`
  height: ${props => props.headerHeightPhone};
  @media (min-width: ${props => props.bpTablet}) {
    height: ${props => props.headerHeightPhone};
  }
  @media (min-width: ${props => props.bpDesktop}) {
    height: ${props => props.headerHeightTablet};
  } 
  @media (min-width: ${props => props.bpDesktopLg}) {
    height: ${props => props.headerHeightDesktop};
  }   
`;

