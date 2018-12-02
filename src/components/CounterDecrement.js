import React from 'react';
import { connect } from 'react-redux';
import { decrement } from '../redux/actions/index';

class CounterDecrement extends React.Component {
  constructor() {
    super();
    this.decrement = this.decrement.bind(this);
  }
  decrement() {
    this.props.decrement();
  }
  render() {
    return (
      <button className="button-minus" onClick={this.decrement}>-</button>
    )
  }  
}


const mapDispatchToProps = dispatch => {
  return {
    decrement: () => {
      dispatch(decrement());
    }
  }
}
export default connect(null, mapDispatchToProps)(CounterDecrement);

