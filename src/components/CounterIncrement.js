import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../redux/actions/index';

class CounterIncrement extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.props.increment();
  }
  render() {
    return (
      <button className="button-add" onClick={this.increment}>+</button>
    )
  }  
}


const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment());
    }
  }
}
export default connect(null, mapDispatchToProps)(CounterIncrement);

