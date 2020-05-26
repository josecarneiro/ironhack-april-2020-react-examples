import React, { Component } from 'react';

// let count = 10;

// const Counter = () => {
//   function incrementCount() {
//     count++;
//   }

//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={incrementCount}>+</button>
//     </div>
//   );
// };

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 10
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const message = this.props.message;
    return (
      <div>
        <strong>{message}</strong>
        <span>{this.state.count}</span>
        <button onClick={this.incrementCount}>+</button>
      </div>
    );
  }
}

export default Counter;
