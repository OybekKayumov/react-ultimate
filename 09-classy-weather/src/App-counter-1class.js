import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    console.log('this: ', this);
    this.setState(curState => {
      return {count: curState.count - 1}
    })

    // this.setState({ count: 10 }); // always set state to 10
  }

  handleIncrement() {
    this.setState(curState => {
      return {count: curState.count + 1}
    })
  }

  render() { 
    const date = new Date();
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecrement} >-</button>
        <span>{date.toDateString()} [{this.state.count}]</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default Counter;
