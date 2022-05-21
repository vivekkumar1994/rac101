import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 2
    }));
  };

  decrement = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count - 2
    }));
  };

  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <input type="text" value={this.state.count} />
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;