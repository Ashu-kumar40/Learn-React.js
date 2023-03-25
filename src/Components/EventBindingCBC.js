import { Component } from "react";

class EventBindingCBC extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      Testvalue: "test",
    };
    //either we can use bind method or we can use arrow function in event handeling.
    this.increment = this.increment.bind(this);
  }
  increment() {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>The count value is : {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default EventBindingCBC;
