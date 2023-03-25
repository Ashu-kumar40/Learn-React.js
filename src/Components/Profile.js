//Function base component

const name = "Ashu";
const msg  = () => {
    return "I am using github codespace";
}

function Hello() {
  return (
    <>
      <h1>I am learning React.</h1>
      <h2>My name is {name} </h2> 
      <p>The message is: {msg()} </p> 
    </>
  );
}

// differnt way to write function base component
// const Hello = () => {
//     return <h1> I am learning React.</h1>
// }


export default Hello;
