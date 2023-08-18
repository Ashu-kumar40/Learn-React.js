import React from 'react'
import { createContext } from 'react'
import Child1 from './Child1';

const MyContext = createContext();
export default function UseContext() {
    const data = "This Data is coming from the parent container."
    return (
        <MyContext.Provider value={data}>
            The useContext() hook in React is used to consume and access data from the React context API. Context allows you to share data (usually state or functions) across multiple components without the need to pass props through every level of the component tree. It provides a way to manage global or shared state in your application, making it easier to maintain and update such data.

            Before the introduction of hooks and the useContext() hook, the context API could be used with a Consumer component or the higher-order component pattern. The useContext() hook simplifies the consumption of context by providing a more concise and straightforward way to access context values within functional components.
            <Child1 />
        </MyContext.Provider>
    )
}

export {MyContext};