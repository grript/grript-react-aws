import React from 'react';
import styled from 'styled-components';
import { ColorBgDropdown } from './Variables';

class DropdownComposite extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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
      }
      // if the drodpown collapsible is not showing,
      // there is no need for the DOM document event listener
      else {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
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
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);   
  }
  render() {
    return (
      <StyledDropdownComposite ref={node => {this.node = node}} className={`DropdownCompositeComponent dropdown-clicked-${this.state.dropdownVisible}`}
        marginLeft={this.props.marginLeft} marginRight={this.props.marginRight}
        positionRight={this.props.positionRight} 
        colorBgDropdown={ColorBgDropdown} >
        <a className="dropdown-trigger" onClick={this.handleClick}>{<this.props.trigger/>}</a>
        <div className="dropdown-triangle"></div>
        <div className="dropdown-collapsible box-shadow">{<this.props.collapsible />}</div>
      </StyledDropdownComposite>
      );
  }
}


export default DropdownComposite;

// 'css in js' styling 
const StyledDropdownComposite = styled.div`
  position: relative;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  display: flex;
  flex-direction: column;
  align-items: center;
  .dropdown-triangle {
    width: 0;
    height: 0;
    display: none;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    bottom: -12px;
    border-width: 0 8.5px 8.5px;
    border-style: dashed dashed solid;
    border-color: transparent;
    border-bottom-color: ${props => props.colorBgDropdown};
  }
  &.dropdown-clicked-true .dropdown-triangle {
    display: block;
  }
  .dropdown-collapsible {
    position: absolute;
    top: 34px;
    height: 0;
    overflow: hidden;
    right: ${props => props.positionRight};
    border-radius: 6px;
    background-color: ${props => props.colorBgDropdown};
  }
  &.dropdown-clicked-true .dropdown-collapsible {
    height: auto;
  }
`;

