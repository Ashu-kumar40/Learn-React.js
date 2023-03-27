import { Component } from "react";
class HandelingUserInput extends Component {
  state = {
    firstname: "firstname",
    lastname: "lastname",
  };
  HandleFirstnameChange = (event) =>{
    this.setState({
        firstname: event.target.value
    })
  }
  HandleLastnameChange = (event) =>{
    this.setState({
        lastname: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form>
          <input type="text" value={this.state.firstname} onChange={this.HandleFirstnameChange}></input>
          <input type="text" value={this.state.lastname} onChange={this.HandleLastnameChange}></input>
        </form>
      </div>
    );
  }
}

export default HandelingUserInput;
