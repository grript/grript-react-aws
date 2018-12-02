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
        
        <CounterIncrement />
        <span className="count">{this.props.count}</span>
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
  .count {
    display: inline-block;
    min-width: 60px;
    font-size: 24px;
    text-align: center;
    font-weight: 600;
  }
  button {
    font-size: 20px;
  }
  .button-add {
  }
`;