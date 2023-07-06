import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 50}
  }

  render() { 
    return (
      <div>
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    )
  }
}

export default Counter;
