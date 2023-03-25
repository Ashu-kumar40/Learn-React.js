function EventHandeling() {
    // function btnClick(){
    //     console.log("The button is clicked");
    // }
    const btnClick = () =>{
        console.log("The button is clicked");
    }
    return(
        <div>
            <h2>This is Event Handeling tutorial in function based components.</h2>
            <button onClick={btnClick}>Click here</button>
        </div>
    )
}

export default EventHandeling;