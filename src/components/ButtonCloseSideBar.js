import React from 'react';
import styled from "styled-components";
import { ColorBgMobileSidebar } from './Variables'; 

let handleClick = (_event, _self) => {
  console.log("BUttonSideBar icon is clicked!");
  document.documentElement.classList.toggle('mobile-sidebar-is-open');
}

const ButtonCloseSideBar = () => {
  return (
    <CloseSideBarIcon className="close-menu-icon" onClick={handleClick} bgColor={ColorBgMobileSidebar} />
  );
}
export default ButtonCloseSideBar;


// 'css in js' styling 
const CloseSideBarIconWrapper = styled.div`
  width: 100%;
  height: 33px;

`;
const CloseSideBarIcon = styled.div`
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTEycHgiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDY0IDY0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCI+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjguOTQxLDMxLjc4NkwwLjYxMyw2MC4xMTRjLTAuNzg3LDAuNzg3LTAuNzg3LDIuMDYyLDAsMi44NDljMC4zOTMsMC4zOTQsMC45MDksMC41OSwxLjQyNCwwLjU5ICAgYzAuNTE2LDAsMS4wMzEtMC4xOTYsMS40MjQtMC41OWwyOC41NDEtMjguNTQxbDI4LjU0MSwyOC41NDFjMC4zOTQsMC4zOTQsMC45MDksMC41OSwxLjQyNCwwLjU5YzAuNTE1LDAsMS4wMzEtMC4xOTYsMS40MjQtMC41OSAgIGMwLjc4Ny0wLjc4NywwLjc4Ny0yLjA2MiwwLTIuODQ5TDM1LjA2NCwzMS43ODZMNjMuNDEsMy40MzhjMC43ODctMC43ODcsMC43ODctMi4wNjIsMC0yLjg0OWMtMC43ODctMC43ODYtMi4wNjItMC43ODYtMi44NDgsMCAgIEwzMi4wMDMsMjkuMTVMMy40NDEsMC41OWMtMC43ODctMC43ODYtMi4wNjEtMC43ODYtMi44NDgsMGMtMC43ODcsMC43ODctMC43ODcsMi4wNjIsMCwyLjg0OUwyOC45NDEsMzEuNzg2eiIvPgogIDwvZz4KPC9zdmc+Cg==');
  background-repeat: no-repeat;
  background-size: 23px;
  background-position: center center;
  background-color: ${props => props.bgColor};
  transition: transform .25s ease;
  height: 40px;
  width: 0;
  position: absolute;
  right: -18px;
  top: 0;
  transform: rotate(-90deg);
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }

  html.mobile-sidebar-is-open & {
    transform: rotate(0deg);
    transition: transform .75s ease;
    width: 40px;
  }
`;