import React from 'react'

export default function Fragments() {
  return (
    // <div> 
        // This div can be replaced with React.Fragment. Freagment is a component that does not render any HTML element. It is used to group a list of children without adding extra nodes to the DOM. 
    // </div>

        // <React.Fragment>
        //     <h1>Heading 1</h1>
        //     <h2>Heading 2</h2>
        // </React.Fragment>

        // But the above code can be replaced with the following code. This is called as short syntax.
        <>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
        </>
  )
}
