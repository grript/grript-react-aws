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
        <div className="panel">  
          <CounterIncrement />
          <span className="count">{this.props.count}</span>
          <CounterDecrement />
        </div>  
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
  max-width: 260px;
  padding: 1em;
  h3 {
    margin-top: 0;
  }
  .panel {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
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
`;