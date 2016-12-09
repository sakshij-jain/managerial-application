import React from 'react';
import ReactDOM from 'react-dom';

import { increment, decrement } from '../actions';
import { connect } from 'react-redux';

class Counter extends React.Component{

  render() {

    const { count, increment, decrement } = this.props;

    return (
      <div>
        <span>{count}</span>
        <br />
        <button onClick={() => increment(count)}>Increment</button>
        <button onClick={() => decrement(count)}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = ({counter}) => {
  return {
    count : counter.count
  }
}

export default connect(mapStateToProps, {
  increment, decrement
})(Counter);
