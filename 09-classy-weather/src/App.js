import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 50};
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleDecrement() {
    console.log('this: ', this);
    this.setState(curState => {
      return {count: curState.count - 1}
    })
  }

  render() { 
    return (
      <div>
        <button onClick={this.handleDecrement} >-</button>
        <span>{this.state.count}</span>
        <button>+</button>
      </div>
    )
  }
}

export default Counter;
