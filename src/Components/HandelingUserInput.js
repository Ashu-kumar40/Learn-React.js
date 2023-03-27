import { Component } from "react";
class HandelingUserInput extends Component {
  state = {
    firstname: "firstname",
    lastname: "lastname",
  };
  HandleFirstnameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  HandleLastnameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // the above function is used to prevent the default behaviour of the form. if you submit the form it will refresh the page. so to prevent that we use this function.
    console.log({
      fname: this.state.firstname,
      lname: this.state.lastname,
    });
    alert(
      `Firstnama : ${this.state.firstname} \nLastname: ${this.state.lastname}`
    );
  };
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.firstname}
            onChange={this.HandleFirstnameChange}
          ></input>
          <input
            type="text"
            value={this.state.lastname}
            onChange={this.HandleLastnameChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default HandelingUserInput;
