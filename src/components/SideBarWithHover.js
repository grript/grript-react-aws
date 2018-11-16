import React from 'react';
import styled from 'styled-components';


class SideBarWithHover extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      boolVar: false
    };
  }

  handleClick() {
    const newBoolVarStatus = !this.state.boolVar;
    this.setState({boolVar: newBoolVarStatus});
  }
  handleMouseEnter() {
    //rocks898
    document.documentElement.classList.add('overflow-hidden');
  }  
  handleMouseLeave() {
    //rocks898
    document.documentElement.classList.remove('overflow-hidden');
  }  


  
  render() {
    return (
      <StyledSideBarWithHover className="sidebar-hover" id="sidebar-hover" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleClick} boolVar={this.state.boolVar} >
        {this.props.children}
      </StyledSideBarWithHover> 


    );
  }
}

export default SideBarWithHover;

const StyledSideBarWithHover = styled.div`

`;