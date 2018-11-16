import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  background-color: ${(props) => props.boolVar ? "red" : "green"};
`;

class Box2 extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      boolVar: false
    };
  }

  handleClick() {
    const newBoolVarStatus = !this.state.boolVar;
    this.setState({boolVar: newBoolVarStatus});
  }

  render() {
    return (
      <div className="rocks898" onClick={this.handleClick} boolVar={this.state.boolVar}>
        Rocks 898
      </div>
    );
  }
}

export default Box2;