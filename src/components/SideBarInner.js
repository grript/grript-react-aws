import React from 'react';
import styled from "styled-components";
import NavMain from './NavMain';
import { ColorBgMobileSidebar } from './Variables';
import { ClassToggleSideBar } from  './Variables';
import ButtonCloseSideBar from './ButtonCloseSideBar';

const SideBarInner = () => {
  return (
      <StyledSideBarInner  className="sidebar-inner" role="navigation" aria-label="Sidebar navigation" >
          <NavMain />
        <ButtonCloseSideBar />
        <p>Nulla interdum commodo semper. Donec eu dui fermentum, egestas odio sed, lacinia dolor. Morbi a dui tempor, efficitur est ac, efficitur sapien. Praesent sollicitudin arcu id arcu vehicula, sit amet rhoncus metus lacinia. Curabitur ex diam, semper vel turpis et, condimentum semper massa. Cras in cursus dui, a vehicula turpis. Integer venenatis purus at lacinia iaculis. Aliquam tincidunt augue justo, non placerat est elementum sit amet. In ullamcorper, enim quis bibendum feugiat, nibh quam sagittis diam, nec sagittis metus urna ac erat.
          </p>

      </StyledSideBarInner>
  );
}

export default SideBarInner;

const StyledSideBarInner = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  overflow-y: auto;
`;