
// file LayoutContainer2.js

import React from 'react';
import styled from "styled-components";


import HeaderInner from './HeaderInner';
import MainInner from './MainInner';
import SideBarInner from './SideBarInner';
import FooterInner from './FooterInner';
import { BpPhoneLandscape } from './Variables';
import { BpTablet } from './Variables';
import { BpDesktop } from './Variables';
import { BpDesktopLg } from './Variables';
import { HeaderHeightPhone } from './Variables';
import { HeaderHeightTablet } from './Variables';
import { HeaderHeightDesktop } from './Variables';
import SideBarWithHover from './SideBarWithHover';
import About from './About';

const LayoutContainer2 = () => {
  
  return (
    <StyledLayouContainer2>
      <StyledHeader className="main-header" bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop}>
        <HeaderInner />
      </StyledHeader>
      <div className="header-height"></div>
      
      <MainTag bpDesktopLg={BpDesktopLg}>
        <MainInner >
          <About />
        </MainInner >  
      </MainTag>
      <StyledSideBar className="sidebar" id="sidebar" bpTablet={BpTablet} bpDesktop={BpDesktop} bpDesktopLg={BpDesktopLg} headerHeightPhone={HeaderHeightPhone} headerHeightTablet={HeaderHeightTablet} headerHeightDesktop={HeaderHeightDesktop} > 
        <SideBarWithHover>   
          <SideBarInner />
        </SideBarWithHover>
      </StyledSideBar>
      <FooterTag>
        <FooterInner />
      </FooterTag>  
    </StyledLayouContainer2>  
  );
}
export default LayoutContainer2;

// 'css in js' styling 
const StyledLayouContainer2 = styled.div`

`;
const StyledSideBar = styled.section`
  background-color: blue;
  position: fixed;
  top: ${props => props.headerHeightPhone};
  height: 100%;
  width: 300px;
  overflow-y: auto;
  @media (min-width: ${props => props.bpTablet}) {
    top: ${props => props.headerHeightPhone};
  }
  @media (min-width: ${props => props.bpDesktop}) {
    top: ${props => props.headerHeightTablet};
  } 
  @media (min-width: ${props => props.bpDesktopLg}) {
    top: ${props => props.headerHeightDesktop};
  }       
`;
const StyledHeader = styled.header`
  background-color: #000;
  position: fixed;
  top:0;
  width: 100%;
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

const MainTag = styled.main`
  background-color: red;
  @media (min-width: ${props => props.bpDesktopLg}) {
    margin-left: 300px;
    .main-inner {
      height: 100%;
      overflow-y: hidden;
      &:hover {
        overflow-y: auto;
      }
    }
  }  
`;

const SideBarTag = styled.section`
  height: 100%;
  overflow: hidden;
`;

const FooterTag = styled.footer`
  margin-left: 300px;
`;