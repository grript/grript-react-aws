import React from 'react';
import { connect } from 'react-redux';
import { increment3 } from '../redux/actions/index';

class CounterIncrement extends React.Component {
  constructor() {
    super();
    this.increment2 = this.increment2.bind(this);
  }
  increment2() {
    this.props.increment5();
  }
  render() {
    return (
      <button className="button-add" onClick={this.increment2}>+</button>
    )
  }  
}


const mapDispatchToProps = dispatch => {
  return {
    increment4: () => {
      dispatch(increment3());
    },
    increment5: () => {
      dispatch(increment3());
    }
  }
}
export default connect(null, mapDispatchToProps)(CounterIncrement);

