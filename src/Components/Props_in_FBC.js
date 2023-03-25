// props in function base component

// props are object which is passed to the component as an argument and we can access it using props object in the component.
console.log(props);

// limitation of props is that we can't change the value of props because props are immutable in nature

// props.name = 'Nishant' // this will give error
// to prevent this error we use state

function Fun2(props) {
    return <p>Name is : {props.name} {props.sirname} </p>
}

export default Fun2;