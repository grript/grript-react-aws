import React from 'react';
import styled from 'styled-components';
import { BpTablet, BpDesktop, ColorBgDropdown } from './Variables';
import { BpNavDropdown, BpNavDropdownNum, ColorBgLinkIsActive } from './Variables';
import IconNavDownArrow from './IconNavDownArrow';
import { HeaderHeightPhone, HeaderHeightTablet, HeaderHeightDesktop } from  './Variables';
import { MenuMainStyledAsDropdown } from './MenuMain';

class NavDropdownCompositeNew extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      dropdownVisible: false,
    };
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      const newDropdownVisibleStatus = !this.state.dropdownVisible;
      this.setState({dropdownVisible: newDropdownVisibleStatus});
      // if the drodpown collapsible is showing,
      // add the DOM document click event listener
      if (newDropdownVisibleStatus) {
        document.addEventListener('mousedown', this.handleClickOutside, false);
        // rockssource
        // document.documentElement.classList.add('overflow-hidden');

      }
      // if the drodpown collapsible is not showing,
      // there is no need for the DOM document event listener
      else {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
        document.documentElement.classList.remove('overflow-hidden');
      }
    }
  }
  handleClickOutside = (e) => {
    // if you click inside the dropdown collapsible 
    // but not on the dropdown trigger button , do nothing
    if (this.node.contains(e.target)) {
      return;
    }
    // if you click outside the entire dropdown, 
    /// close the dropdown and remove click event listener on the DOM document
    if (!this.node.contains(e.target)) {
      const newDropdownVisibleStatus = false;
      this.setState({dropdownVisible: newDropdownVisibleStatus});
      document.removeEventListener('mousedown', this.handleClickOutside, false);
    }
  }
  handleMouseEnter = (e) => {
    if (document.body.clientWidth <= BpNavDropdownNum) {
      document.documentElement.classList.add('overflow-hidden');
    }
  }
  handleMouseLeave = (e) => {
    document.documentElement.classList.remove('overflow-hidden');
  }      
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);   
  }
  render() {
    return (
      <StyledDropdownComposite ref={node => {this.node = node}} 
        className={`NavDropdownCompositeComponent dropdown-clicked-${this.state.dropdownVisible}`}
        bpNavDropdown={BpNavDropdown}
        bpTablet={BpTablet} bpDesktop={BpDesktop} 
        headerHeightPhone={HeaderHeightPhone}
        headerHeightTablet={HeaderHeightTablet}
        headerHeightDesktop={HeaderHeightDesktop}
        colorBgDropdown={ColorBgDropdown} >
        <a className={`dropdown-trigger icon-clicked-${this.state.dropdownVisible}`} 
          onClick={this.handleClick}>
          <IconNavDownArrow />
        </a>
        <div className="dropdown-collapsible" 
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave} >
            <MenuMainStyledAsDropdown />
        </div>
      </StyledDropdownComposite>
      );
  }
}

export default NavDropdownCompositeNew;

// 'css in js' styling 
const StyledDropdownComposite = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dropdown-collapsible {
    position: fixed;
    top: ${props => props.headerHeightPhone};
    height: .00000001px;
    transition: .5s all ease;
    overflow-y: auto;
    right: 0;
    background-color: ${props => props.colorBgDropdown};
  }
  @media (min-width:${props => props.bpTablet}) {
    .dropdown-collapsible {
      top: ${props => props.headerHeightTablet}; 
    } 
  }
  @media (min-width: ${props => props.bpNavDropdown}) {
    .dropdown-trigger {
      display: none;
    }
    .dropdown-collapsible {
      position: relative;
      height: auto;
      top: auto; 
      background-color: transparent;
    }
  }

  @media (min-width:${props => props.bpDesktop}) {
    // top: ${props => props.headerHeightDesktop}; 
  }  


  &.dropdown-clicked-true .dropdown-collapsible {
    height: 100%;
    transition: .5s all ease;
  }
`;
