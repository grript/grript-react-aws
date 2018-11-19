import React from 'react';
import styled from "styled-components";

const HeaderContainer = (props) => {
  return (
    <StyledHeaderContainer className="header-container">
      {props.children}
    </StyledHeaderContainer>
  );
}


export default HeaderContainer;

const StyledHeaderContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

`;