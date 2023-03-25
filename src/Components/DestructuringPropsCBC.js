import { Component } from "react";

class PetName extends Component {
    render(){
        //We can use destructuring to get the props in the render method itself as shown below
        const {name} = this.props;
        return (
            //now we can use the name variable directly in the return statement
            <h1>My pet name is {name}</h1>
        )
    }
}

export default PetName;