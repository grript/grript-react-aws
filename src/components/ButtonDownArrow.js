import React from 'react';
import styled from "styled-components";
import { ClassToggleNavDropdown } from  './Variables';
import { BpNavDropdown } from './Variables';

class ButtonDownArrow extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    // this.handleMouseEnter = this.handleMouseEnter.bind(this);
    // this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      boolVar: false,
      class: '',
    };
  }

  handleClick() {
    console.log('rocks 99');
    const newBoolVarStatus = !this.state.boolVar;
    this.setState({boolVar: newBoolVarStatus});
    document.documentElement.classList.toggle('nav-dropdown-trigger-is-clicked');
  }
  // handleMouseEnter() {
  //   document.documentElement.classList.add(this.state.boolVar);
  //   const newBoolVarStatus = !this.state.boolVar;
  //   this.setState({boolVar: newBoolVarStatus});
  // }  
  // handleMouseLeave() {
  //   document.documentElement.classList.remove(this.state.boolVar);
  //   const newBoolVarStatus = !this.state.boolVar;
  //   this.setState({boolVar: newBoolVarStatus});
  // }  
//       <StyledButtonDownArrow className={this.state.boolVar ? 'active': null} id="nav-dropdown-trigger" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleClick} boolVar={this.state.boolVar} />

  render() {
    return (
      <StyledButtonDownArrow className={this.state.boolVar ? 'active': null} id="nav-dropdown-trigger" onClick={this.handleClick} boolVar={this.state.boolVar} bpNavDropdown={BpNavDropdown} />
    );
  }
}

export default ButtonDownArrow;


// 'css in js' styling 
const StyledButtonDownArrow = styled.div`
  width: 25px;
  height: 25px;
  background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQ1MS44NDcgNDUxLjg0NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUxLjg0NyA0NTEuODQ3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTIyNS45MjMsMzU0LjcwNmMtOC4wOTgsMC0xNi4xOTUtMy4wOTItMjIuMzY5LTkuMjYzTDkuMjcsMTUxLjE1N2MtMTIuMzU5LTEyLjM1OS0xMi4zNTktMzIuMzk3LDAtNDQuNzUxICAgYzEyLjM1NC0xMi4zNTQsMzIuMzg4LTEyLjM1NCw0NC43NDgsMGwxNzEuOTA1LDE3MS45MTVsMTcxLjkwNi0xNzEuOTA5YzEyLjM1OS0xMi4zNTQsMzIuMzkxLTEyLjM1NCw0NC43NDQsMCAgIGMxMi4zNjUsMTIuMzU0LDEyLjM2NSwzMi4zOTIsMCw0NC43NTFMMjQ4LjI5MiwzNDUuNDQ5QzI0Mi4xMTUsMzUxLjYyMSwyMzQuMDE4LDM1NC43MDYsMjI1LjkyMywzNTQuNzA2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
  background-size: 100%;
  background-repeat: no-repeat;
  transition: .4s all ease;
  &:hover {
    cursor: pointer;
    opacity: .8;
  }
  &.active {
    transform: rotate(180deg);
    transition: 0.5s all ease;
  }
  @media (min-width: ${props => props.bpNavDropdown}) {
    display: none;
  }  
`;
