import { Component } from "react";

class Counter extends Component {
  constructor() {
    //the constructor is the first function that is called when the class is called
    // the constructor is used to initialize the state of the class.
    // The super() function is used to call the constructor of the parent class.
    // The super() function must be called before any other statement in the constructor.
    super();
    this.state = {
      counter: 0,
      Testvalue: "test",
    };
    //state is a special property of the class which is used to store the data of the class.
    //State is an object which is used to store the data of the class.
  }

  increment() {
    // to change the value of the state we have to use the setState() function.
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrement() {
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
        {/* <h1>The test value is : {this.state.Testvalue}</h1> */}
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
