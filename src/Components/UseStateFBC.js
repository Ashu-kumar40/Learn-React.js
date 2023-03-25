import { useState } from "react";

function CounterFBC() {
    //In function based component we use useState hook to make a function for event handeling.
    // Standard syntax for useState hook is: const [state_name, setState_function_name] = useState(initialState);
    const [counter, setCounter] = useState(0);
    //useState is a hook which is used to make a function for event handeling. it is use to make a state in function based component.

    const increment = () =>{
        // counter = counter + 1;
        // the above line will not work because we can not change the value of counter directly.
        // to change the value of counter we have to use setCounter function.
        setCounter(counter + 1);
    }
    const reset = () =>{
        setCounter(0);
    }

    return (
        <div>
            <h1>This is a 'useState' tutorial in function based components.</h1>
            <h3>The value counter is : {counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

}

export default CounterFBC;