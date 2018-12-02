import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions/index';
import CounterIncrement from './CounterIncrement';
import CounterDecrement from './CounterDecrement';

class Counter extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <StyledCounter className='counter-widget'>
        <h3>Counter</h3>
        <div>Count: {this.props.count}</div>
        <CounterIncrement />
        <CounterDecrement />
      </StyledCounter>
    )
  }  
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);


const StyledCounter = styled.div`
  border: 1px solid #ddd;
  border-radius: 3px;
  dispay: inline-block;
  max-width: 300px;
  padding: 1em;
  button {
    font-size: 20px;
  }
  .button-add {
    margin-right: 1em;
  }
`;