import React from 'react';
import styled from 'styled-components';


class DropdownComposite extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      boolVar: false,
      class: '',
    };
  }

  handleClick() {
    console.log('rocks 88');
    const newBoolVarStatus = !this.state.boolVar;
    this.setState({boolVar: newBoolVarStatus});
    console.log('rocks88', newBoolVarStatus);
  }

  render() {
    return (
      <StyledDropdownComposite className={`DropdownCompositeComponent dropdown-clicked-${this.state.boolVar}`}
        marginLeft={this.props.marginLeft} marginRight={this.props.marginRight}
        positionRight={this.props.positionRight} >
        <a className="dropdown-trigger" onClick={this.handleClick}>{<this.props.trigger/>}</a>
        <div className="dropdown-collapsible box-shadow">{<this.props.dropdown />}</div>
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
  .dropdown-collapsible {
    position: absolute;
    top: 30px;
    height: 0;
    overflow: hidden;
    right: ${props => props.positionRight};
  }
  &.dropdown-clicked-true .dropdown-collapsible {
    height: auto;
  }
`;

