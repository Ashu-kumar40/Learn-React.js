import { Component } from "react";

class EventHandelingCBC extends Component{
    //In class based component we make a function for event handeling.
    btnClick(){
        console.log("This is class based component event handeling");
    }
    render (){
        return(
            <div>
            <h2>This is Event Handeling tutorial in Class based components.</h2>
            <button onClick={this.btnClick}>Click here</button>
            {/* In class based component we have to use this keyword in event handeling. */}
        </div>
        )
    }
}

export default EventHandelingCBC;